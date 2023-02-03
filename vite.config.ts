import { defineConfig } from 'vite'
import Solid from 'solid-start/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { presetAttributify, presetUno } from 'unocss'
// @ts-expect-error - missing types
import vercelAdapter from 'solid-start-vercel'
// import staticAdapter from 'solid-start-static'

export default defineConfig({
  plugins: [
    Solid({
      adapter: vercelAdapter(),
      ssr: false,
    }),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
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
