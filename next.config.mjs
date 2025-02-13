import i18nextConfig from "./next-i18next.config.js"; 
const nextConfig ={
  reactStrictMode: true,
  i18n: i18nextConfig.i18n,
  experimental: {
    turbo: {}, 
  },
}
export default nextConfig;
