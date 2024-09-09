/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig;

// const withVideos = require('next-videos')

// module.exports = withVideos()

// const { withNextVideo } = require('next-video/process');
 
// module.exports = withNextVideo(nextConfig);

const { withNextVideo } = require('next-video/process');
const withVideos = require('next-videos');

// const nextConfig = {
//   // Your existing Next.js config options
// };

module.exports = withNextVideo(
  withVideos(nextConfig)
);