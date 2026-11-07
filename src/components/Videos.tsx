import { ArrowUpRight, Clapperboard } from "lucide-react";
import { profile } from "@/data/profile";
import { getLatestVideos, type YouTubeVideo } from "@/lib/youtube";
import { FacebookFeed } from "./FacebookFeed";
import { FacebookIcon, YoutubeIcon } from "./icons";
import { Reveal, Section } from "./Section";
import { YouTubeCard } from "./YouTubeCard";

const VISIBLE = 4;

const dateFormat = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" });
const viewFormat = new Intl.NumberFormat("en", { notation: "compact" });

function videoMeta(video: YouTubeVideo) {
  const parts = [video.published ? dateFormat.format(new Date(video.published)) : ""];
  if (video.views !== null) parts.push(`${viewFormat.format(video.views)} views`);
  return parts.filter(Boolean).join(" · ");
}

function PlatformHeader({
  icon,
  name,
  handle,
  action,
  href,
}: {
  icon: React.ReactNode;
  name: string;
  handle: string;
  action: string;
  href: string;
}) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div className="min-w-0">
        <p className="font-medium">{name}</p>
        <p className="truncate text-xs text-subtle">{handle}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-medium transition-colors hover:border-accent/50 hover:text-accent"
      >
        {action}
        <ArrowUpRight className="size-3.5" />
      </a>
    </div>
  );
}

export async function Videos() {
  const videos = await getLatestVideos(profile.youtubeChannelId, VISIBLE + 1);
  const { youtube, facebook } = profile.socials;

  return (
    <Section id="videos" label="Content" title="Videos & updates">
      <Reveal>
        <p className="max-w-2xl leading-relaxed text-muted">
          I share what I learn and build. Latest uploads from my YouTube channel and Facebook page show up
          here automatically — newest first.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_400px]">
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 sm:p-6">
            <PlatformHeader
              icon={<YoutubeIcon className="size-8 shrink-0 text-[#ff0033]" />}
              name="YouTube"
              handle={youtube.replace("https://www.youtube.com/", "")}
              action="Subscribe"
              href={`${youtube}?sub_confirmation=1`}
            />

            {videos.length > 0 ? (
              <>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {videos.slice(0, VISIBLE).map((video) => (
                    <YouTubeCard key={video.id} video={video} meta={videoMeta(video)} />
                  ))}
                </div>
                {videos.length > VISIBLE && (
                  <a
                    href={`${youtube}/videos`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent"
                  >
                    View all videos <ArrowUpRight className="size-4" />
                  </a>
                )}
              </>
            ) : (
              <div className="mt-6 flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-line px-6 py-14 text-center">
                <span className="grid size-12 place-items-center rounded-full bg-accent-soft text-accent">
                  <Clapperboard className="size-6" />
                </span>
                <p className="mt-4 font-medium">New videos are on the way</p>
                <p className="mt-1 max-w-sm text-sm text-muted">
                  Subscribe to the channel and you&apos;ll be the first to know when they go live.
                </p>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
            <PlatformHeader
              icon={<FacebookIcon className="size-8 shrink-0 text-[#1877f2]" />}
              name="Facebook"
              handle={facebook.replace("https://www.facebook.com/", "@")}
              action="Follow"
              href={facebook}
            />
            <div className="mt-6">
              <FacebookFeed pageUrl={facebook} />
            </div>
            <a
              href={`${facebook}/videos`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent"
            >
              Watch all videos on Facebook <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
