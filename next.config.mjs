/** @type {import('next').NextConfig} */

const nextConfig = {
    // output:"export",
    eslint:{
        ignoreDuringBuilds: true,
    },
    typescript:{
        ignoreBuildErrors: true,
    },
    images:{
        domains:['assets.aceternity.com']
    }
};

export default nextConfig;
