import svgLoader from 'vite-svg-loader'
import dynamicRoutes from './helpers/dynamicRoutes'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'node-server'
  },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@pinia/nuxt',

    ['@funken-studio/sitemap-nuxt-3', {
      generateOnBuild: true,
      hostname: 'https://intheloop.dev',
      cacheTime: 1,
      routes: dynamicRoutes,
      defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date().toISOString(),
      },
    }]
  ],

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
