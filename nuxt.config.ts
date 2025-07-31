import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
   nitro: {
    preset: 'netlify-edge', // or 'netlify' instead of 'netlify-legacy'
  },
  typescript: {
    typeCheck: false
  },
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
})
