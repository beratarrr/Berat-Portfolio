// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  components: [
    { path: '~/components/homepage'},
    { path: '~/components/skills'},
    { path: '~/components/experience'},
    { path: '~/components/projects'},
    '~/components',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    '@/assets/css/main.css',
  ],

  compatibilityDate: '2025-04-01'
})