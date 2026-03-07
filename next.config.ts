import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '100mb',
        }
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    images: { remotePatterns: [
            { protocol: 'https', hostname: 'covers.openlibrary.org' },
            { protocol: 'https', hostname: 'clear' +
                    'u.public.blob.vercel-storage.com' },
        ]}
};

export default nextConfig;