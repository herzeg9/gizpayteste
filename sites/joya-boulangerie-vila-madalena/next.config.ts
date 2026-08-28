import type { NextConfig } from "next";
import { cabecalhosSeguranca } from "./src/lib/seguranca";

const dev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: cabecalhosSeguranca({ dev }) }];
  },
};

export default nextConfig;
