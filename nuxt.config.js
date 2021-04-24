export default {
  modern: 'server',
  head: {
    title: 'intheloop',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
      },
    ],
  },

  css: ['~/assets/index.scss'],

  plugins: ['~/plugins/supabase', '~/plugins/dayjs'],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/svg',
  ],

  modules: ['@nuxt/http'],

  build: {},

  components: {
    prefix: false,
  },
}