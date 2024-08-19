/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/portfolio-8b2e0.appspot.com/o/**',
          },
        ],
      },
};



export default nextConfig;
//output:"export" 
//output:"build"
