export default {
  modern: 'server',
  head: {
    title: 'intheloop - Follow your favorite tech',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Stay in the loop - See latest releases, popular tweets, blog posts, communities to engage with and much more.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'intheloop - Follow your favorite tech',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://intheloop.dev/social-image.png',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Stay in the loop - See latest releases, popular tweets, blog posts, communities to engage with and much more.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://intheloop.dev/social-image.png',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'intheloop-dev social media sharing image',
      },
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

  server: {
    host: '0.0.0.0',
  },
}
