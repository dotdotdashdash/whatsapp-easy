import vue from '@vitejs/plugin-vue'

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: ``,
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: { globPatterns: ['**/*.{js,css,html,ico,png,svg}'] },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'WhatsApp Easy | WhatsApp without saving contact',
        short_name: 'WhatsApp-Easy',
        description: 'Send messages to any one on WhatsApp without adding contact',
        start_url: "./",
        theme_color: '#ffffff',
        icons: [
          {
            src: './images/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './images/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: './images/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: './images/we-icon.svg',
            type: 'image/svg',
            purpose: 'maskable'
          }
        ],
        "display": "standalone"
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
