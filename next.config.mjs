/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() { return [{ source: "/reviews", destination: "/testimonials", permanent: true }]; },};
export default nextConfig;
