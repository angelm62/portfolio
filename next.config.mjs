/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images: {
        domains: ['firebasestorage.googleapis.com', 'gs://portfolio-8b2e0.appspot.com'],
    
    },
};



export default nextConfig;
//output:"export" 
//output:"build"