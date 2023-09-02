import path from 'node:path'
import { defineConfig } from 'vite'
import Solid from 'solid-start/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import vercelAdapter from 'solid-start-vercel'

// import staticAdapter from 'solid-start-static'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Solid({
      adapter: vercelAdapter(),
      ssr: false,
    }),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
    }),
    AutoImport({
      imports: ['solid-js', 'solid-app-router'],
      dts: './src/auto-imports.d.ts',
      // resolvers: [
      //   IconsResolver({
      //     componentPrefix: 'Icon',
      //   }),
      // ],
    }),
  ],
})
