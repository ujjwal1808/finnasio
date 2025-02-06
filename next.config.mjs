/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/",
            destination: "/maindashboard",
            permanent: true,
          },
        ];
      }, 
};

export default nextConfig;
