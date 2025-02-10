import path from "path";
import i18nextConfig from "./next-i18next.config.js"; // Import đúng chuẩn ESM

export default {
  reactStrictMode: true,
  i18n: i18nextConfig.i18n, 
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(process.cwd()), 
    };
    return config;
  },
  turbo: {},
};
