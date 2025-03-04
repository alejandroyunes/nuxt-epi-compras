import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/main.scss"],
  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    // '@zadigetvoltaire/nuxt-gtm',
    '@nuxtjs/sitemap',
    '@nuxt/ui'
  ],
  build: {
    transpile: ['@nuxt/ui']
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: '',
      titleTemplate: '%s',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
    },
    rootAttrs: {
      id: 'epicompras',
    },
  },
  image: {
    format: ['webp', 'png'],
    screens: {
      xs: 320,
      md: 1024,
      xl: 1280,
    },
  },

  // gtm: {
  //   id: '',
  //   defer: false,
  //   compatibility: false,
  //   enabled: true,
  //   debug: false,
  //   loadScript: true,
  //   enableRouterSync: true,
  //   trackOnNextTick: false,
  //   devtools: false,
  // },

  compatibilityDate: '2025-02-11',
})