// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  // GitHub Pages configuration
  ssr: false, // Disable server-side rendering for static generation
  nitro: {
    prerender: {
      routes: ['/'] 
    }
  },
  app: {
    baseURL: '/1oui2a/win95', 
  }
})