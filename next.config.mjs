/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images: {
        domains: ['firebasestorage.googleapis.com'], // Add the domain of your image source here
    },
};



export default nextConfig;
//output:"export" 
//output:"build"