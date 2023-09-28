/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["lh3.googleusercontent.com","firebasestorage.googleapis.com"]
  },
   async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Allow all origins
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT,DELETE,PATCH,OPTIONS", // Allow all methods
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type,Authorization", // Allow all headers
          },
        ],
      },
    ];
  }
}

module.exports = nextConfig
