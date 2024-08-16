/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"build",
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
};



export default nextConfig;
//output:"export" 
//output:"build"