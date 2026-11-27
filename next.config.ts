import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Hemat kuota Vercel Image Optimization: cache hasil optimasi 31 hari
    // (default Next 16 hanya 4 jam) dan 7 ukuran saja di srcset (sebelumnya 14).
    minimumCacheTTL: 2678400,
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "kareppeecrunch.com" }],
        destination: "https://kareppecrunch.dekatlokal.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kareppeecrunch.com" }],
        destination: "https://kareppecrunch.dekatlokal.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "kareppeecrunch.dekatlokal.com" }],
        destination: "https://kareppecrunch.dekatlokal.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
