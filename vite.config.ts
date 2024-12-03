import { configDefaults } from 'vitest/config'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import nightwatchPlugin from 'vite-plugin-nightwatch'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import { liveDesigner } from '@pinegrow/vite-plugin'
import VueDevTools from 'vite-plugin-vue-devtools'

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
    VueDevTools({
      // For details, refer to https://devtools-next.vuejs.org/guide/vite-plugin#options
      // appendTo: 'main.ts' // specify entry/plugin (if required)
      //...
    }),
    Unocss({
      presets: [
        presetIcons({
          prefix: 'i-', // default prefix, do not change
        }),
      ],
      content: {
        pipeline: {
          /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
          include: ['./src/**/*'],
        },
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
