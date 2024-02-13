/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  // experimental: {
  //   serverComponentsExternalPackages: [
  //     "@react-email/components",
  //     "@react-email/render",
  //     "@react-email/tailwind",
  //   ],
  // },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.js"
);

module.exports = withNextIntl(nextConfig);
