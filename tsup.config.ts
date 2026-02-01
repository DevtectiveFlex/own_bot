import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.mts'],
  outDir: '.output',
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
})