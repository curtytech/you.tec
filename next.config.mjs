/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const basePath = "";

const nextConfig = {
  // output: "export", // Disabled to allow dynamic routes without generateStaticParams
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
