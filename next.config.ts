/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Optional: helps with routing on GitHub Pages
  assetPrefix: '/<repo-name>/', // Replace with your GitHub repo name if needed
};

module.exports = nextConfig;
