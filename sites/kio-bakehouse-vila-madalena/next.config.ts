import type { NextConfig } from "next";
import { cabecalhosSeguranca } from "./src/lib/seguranca";

const dev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  poweredByHeader: false,
  images: {
    // O padrão entrega só WebP. AVIF é sensivelmente menor no maior asset da
    // página, e o navegador que não suportar cai no WebP pelo `Accept`.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/(.*)", headers: cabecalhosSeguranca({ dev }) }];
  },
};

export default nextConfig;
