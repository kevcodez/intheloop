import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'node-server'
  },

  app: {
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
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@kevcodez',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        {
          async: true,
          defer: true,
          'data-domain': 'intheloop.dev',
          src: 'https://stats.intheloop.dev/js/index.js',
        },
      ],
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    download: true,
    display: 'swap',
    useStylesheet: true,
    inject: true,
    families: {
      Inter: true,
    },
  },


  css: ['~/assets/index.scss'],

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    }
  },

  vite: {
    plugins: [
      svgLoader({
        /* ... */
      })
    ]
  },

})
