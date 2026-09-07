import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allows the IDE's browser preview (proxied via 127.0.0.1) to receive
  // Fast Refresh / HMR updates in development instead of serving a stale,
  // cached page until a manual reload.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
