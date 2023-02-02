import { defineConfig } from 'vite'
import Solid from 'solid-start/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Solid(),
    UnoCSS(),
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
