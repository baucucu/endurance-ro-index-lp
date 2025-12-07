/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.endurance-index.ro',
                    },
                ],
                destination: 'https://endurance-index.ro/:path*',
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'index, follow',
                    },
                    {
                        key: 'Link',
                        value: '<https://endurance-index.ro/>; rel="canonical"',
                    },
                ],
            },
            {
                source: '/',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'index, follow',
                    },
                    {
                        key: 'Link',
                        value: '<https://endurance-index.ro/>; rel="canonical"',
                    },
                ],
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "plus.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "cdn.builder.io",
            },
        ],
    },
};

export default nextConfig;
