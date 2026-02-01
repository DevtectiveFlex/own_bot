import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
      './src/test',
      './**/*.{test,spec}.{ts,js}',
    ],
    environment: 'node',
  },
})