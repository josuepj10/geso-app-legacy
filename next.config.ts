import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // "Nosotros" no tiene página propia; se envía a su primera subpágina.
      { source: "/nosotros", destination: "/nosotros/sobre-geso", permanent: false },
    ];
  },
};

export default nextConfig;
