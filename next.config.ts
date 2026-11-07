import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // YouTube video thumbnails in the Videos section
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
};

export default nextConfig;
