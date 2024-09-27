import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from "@solidjs/start/config";
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
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
    ]
  },
  // ssr: tr,
});
