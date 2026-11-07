export type YouTubeVideo = {
  id: string;
  title: string;
  url: string;
  published: string;
  views: number | null;
};

const entities: Record<string, string> = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&apos;": "'" };

function decode(text: string) {
  return text.replace(/&(amp|lt|gt|quot|apos|#39);/g, (m) => entities[m] ?? m);
}

function pick(xml: string, pattern: RegExp) {
  return xml.match(pattern)?.[1];
}

/**
 * Latest uploads from a channel's public RSS feed (no API key needed), newest first.
 * Cached and refreshed hourly; returns [] if the feed can't be reached.
 */
export async function getLatestVideos(channelId: string, limit = 6): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    return xml
      .split("<entry>")
      .slice(1)
      .map((entry) => {
        const id = pick(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/) ?? "";
        const views = pick(entry, /<media:statistics views="(\d+)"/);
        return {
          id,
          title: decode(pick(entry, /<title>([^<]*)<\/title>/) ?? ""),
          url: pick(entry, /<link rel="alternate" href="([^"]+)"/) ?? `https://www.youtube.com/watch?v=${id}`,
          published: pick(entry, /<published>([^<]+)<\/published>/) ?? "",
          views: views ? Number(views) : null,
        };
      })
      .filter((v) => v.id)
      .sort((a, b) => b.published.localeCompare(a.published))
      .slice(0, limit);
  } catch {
    return [];
  }
}
