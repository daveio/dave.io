import { configDefaults } from 'vitest/config'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import nightwatchPlugin from 'vite-plugin-nightwatch'
import liveDesigner from '@pinegrow/vite-plugin'

// https:/ / vite.dev / config /
export default defineConfig({
  plugins: [
    liveDesigner({
      tailwindcss: {
        configPath: 'tailwind.config.js',
        cssPath: '@/assets/css/tailwind.css',
        restartOnConfigUpdate: true,
        restartOnThemeUpdate: true,
        // themePath: false, // disable Design Panel
      },
    }),
    vue(),
    vueJsx(),
    vueDevTools(),
    nightwatchPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '~~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
