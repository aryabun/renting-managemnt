// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    'boxicons/css/boxicons.min.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: "no_prefix",
    defaultLocale: "km",
    langDir: "locales",
    locales: [
      {
        code: 'km',
        name: 'ភាសាខ្មែរ',
        file: 'kh.json',
      },
      {
        code: 'en',
        name: 'English(US)',
        file: 'en.json',
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    },
  },
})