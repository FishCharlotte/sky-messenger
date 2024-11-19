import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
    basePath: "/ec5001-sky-messenger",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
});

export default nextConfig;
