import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
  root: fileURLToPath(new URL('./src', import.meta.url)),
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    rollupOptions: {
      input: {
        default: fileURLToPath(new URL('./src/default.html', import.meta.url)),
        main: fileURLToPath(new URL('./src/index.html', import.meta.url)),
        test: fileURLToPath(new URL('./src/test.html', import.meta.url)),
        TdFvideo: fileURLToPath(new URL('./src/TdFvideo.html', import.meta.url)),
        sommaire: fileURLToPath(new URL('./src/sommaire.html', import.meta.url))
      }
    }
  }
})
