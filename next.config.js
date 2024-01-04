/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')();

const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
  productionBrowserSourceMaps: process.env.NODE_ENV !== 'production',
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'github-production-user-asset-6210df.s3.amazonaws.com',
    ],
  },
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'mdx'],
};

module.exports = withMDX(nextConfig);
