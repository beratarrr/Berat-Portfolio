// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
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
  })