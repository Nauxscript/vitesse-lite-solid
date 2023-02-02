import { defineConfig } from 'vite'
import Solid from 'solid-start/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [Solid(), UnoCSS()],
})
