import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/bucket.aadilnabi/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
