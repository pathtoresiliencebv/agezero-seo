/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  async rewrites() {
    return [
      // Map / and any subpath (except _next, api, files) to /seo/...
      { source: "/", destination: "/seo" },
      { source: "/:path(.*)", destination: "/seo/:path" },
    ];
  },
};
export default nextConfig;
