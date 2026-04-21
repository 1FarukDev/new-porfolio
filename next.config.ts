import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/1FarukDev",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/faruk-ajibade",
        permanent: false,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/1FarukDev",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
