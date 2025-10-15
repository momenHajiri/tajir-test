import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/store",
        permanent: true, // true يعني 301 redirect
      },
    ];
  },
};

export default nextConfig;
