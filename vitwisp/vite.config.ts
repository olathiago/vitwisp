/// <reference types="vitest" />

import { defineConfig } from 'vite'
import { VitePWA as pwa } from 'vite-plugin-pwa'
// import manifest from './manifest.json'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  define: {
    'process.env': {}
  },
  plugins: [
    vue(),
    pwa({
      strategies: 'injectManifest',
      srcDir: '',
      filename: 'service-worker.js'
    }),
    WindiCSS()
  ]
})
