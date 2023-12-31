/**
 * @type { import("next").NextConfig}
 */
const config = {
  images: {
    path: "/image-optimize",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: `/SoraKumo001/cloudflare-workers-image-optimization/**`,
      },
    ],
  },
};
export default config;
