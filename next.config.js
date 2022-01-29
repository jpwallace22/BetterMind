module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    MAPS_API: process.env.MAPS_API,
    NEXT_PUBLIC_CAPTCHA_KEY: process.env.NEXT_PUBLIC_CAPTCHA_KEY,
    CAPTCHA_SECRET_KEY: process.env.CAPTCHA_KEY,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    MAILCHIMP_API: process.env.MAILCHIMP_API,
  },
  rewrites: async () => [
    {
      source: "/public/email.html",
      destination: "/pages/api/email.js",
    },
  ],
};
