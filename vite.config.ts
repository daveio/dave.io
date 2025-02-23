import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import nightwatchPlugin from 'vite-plugin-nightwatch'
import { liveDesigner } from '@pinegrow/vite-plugin'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    liveDesigner({
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
    // https://github.com/antfu/unplugin-vue-components#configuration
    AutoImportComponents({
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

      dirs: ['./src/components'],

      // allow auto load markdown components under ./src/components/
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      // resolvers: [], // Auto-import using resolvers
      dts: 'components.d.ts',
    }),
    // https://github.com/antfu/unplugin-auto-import#configuration
    vue(),
    AutoImportAPIs({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
        // /\.mdx$/, // .mdx
      ],
      imports: [
        'vue',
        'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        // '@vueuse/core',
        // 'pinia',
      ],
      dirs: [
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        '**/pg-*/**', // To auto-import composables from Vue Designer plugins.
        // 'src/composables',
        // 'src/utils',
        // 'src/stores',
      ],
      vueTemplate: true,
      dts: 'auto-imports.d.ts',
    }),
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
