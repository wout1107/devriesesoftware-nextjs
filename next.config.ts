import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'
import { legacyRedirects } from './lib/seo/legacy-redirects'

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: '**' },
    ],
  },
  async redirects() {
    return legacyRedirects.map((r) => ({
      source: r.from,
      destination: r.to,
      permanent: true,
    }))
  },
};

export default withPayload(nextConfig);
