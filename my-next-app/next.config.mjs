/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"*.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
