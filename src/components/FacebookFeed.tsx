"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const HEIGHT = 560;

/** Facebook Page Plugin timeline (posts & videos, newest first). Loads only when scrolled near. */
export function FacebookFeed({ pageUrl }: { pageUrl: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "300px" });
  const [width, setWidth] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  // The plugin only accepts widths between 180 and 500px, fixed at load time.
  useEffect(() => {
    if (inView && ref.current) {
      setWidth(Math.max(180, Math.min(500, Math.floor(ref.current.clientWidth))));
    }
  }, [inView]);

  const src =
    width &&
    `https://www.facebook.com/plugins/page.php?${new URLSearchParams({
      href: pageUrl,
      tabs: "timeline",
      width: String(width),
      height: String(HEIGHT),
      small_header: "true",
      adapt_container_width: "true",
      hide_cover: "false",
      show_facepile: "false",
    })}`;

  return (
    <div ref={ref} className="relative w-full overflow-hidden rounded-xl bg-white" style={{ height: HEIGHT }}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-bg" />}
      {src && (
        <iframe
          src={src}
          title="Facebook page timeline"
          width={width ?? undefined}
          height={HEIGHT}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          allow="encrypted-media; picture-in-picture; web-share"
          className="relative mx-auto block border-0"
        />
      )}
    </div>
  );
}
