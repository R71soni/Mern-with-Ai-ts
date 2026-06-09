import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tell Next.js/Turbopack to NOT bundle these packages for the browser.
  // Mongoose uses Node.js built-ins (async_hooks, fs, net, tls, dns) that
  // don't exist in browser environments, so they must stay server-side only.
  serverExternalPackages: ['mongoose'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sukhholidays.com',
        port: '',
        pathname: '/**',
      },
      {
        // For the user avatar in Navbar (used in AuthContextWrapper)
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
