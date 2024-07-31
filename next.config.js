/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig;

const withVideos = require('next-videos')

module.exports = withVideos()

const { withNextVideo } = require('next-video/process');
 
module.exports = withNextVideo(nextConfig);