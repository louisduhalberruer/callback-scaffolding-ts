import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
  root: fileURLToPath(new URL('./src', import.meta.url)),
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url))
  }
})
