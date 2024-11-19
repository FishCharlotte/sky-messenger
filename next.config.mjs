import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
// 如果不想build，请将这个配置留空！不然无法npm start！
const nextConfig = BuilderDevTools()({
    // basePath: "/ec5001-sky-messenger",
    // output: "export",  // <=== enables static exports
    // reactStrictMode: true,
});

export default nextConfig;
