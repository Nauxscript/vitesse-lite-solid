import Solid from 'solid-start/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [Solid()],
  test: {
    deps: {
      optimizer: {
        web: {
          include: ['src/**/*.ts', 'src/**/*.tsx'],
        },
      },
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setupVitest.js'],
    server: {
      deps: {
        inline: [/solid-js/],
      },
    },
  },
  // resolve: {
  //   conditions: ['development', 'browser'],
  // },
})
