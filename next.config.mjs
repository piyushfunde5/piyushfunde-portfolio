/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.1.40", "192.168.1.28", "192.168.1.33", "192.168.1.106"],

  // Compress responses
  compress: true,

  // Optimise images: modern formats, aggressive caching
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Long-lived cache headers for all static assets
  async headers() {
    return [
      {
        source: "/(.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.webp|.*\\.avif|.*\\.svg|.*\\.ico|.*\\.woff2?)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/docs/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },
};

export default nextConfig;
