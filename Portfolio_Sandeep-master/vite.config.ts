import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portfolio_Sandeep/',
  build: {
    outDir: 'docs',
  },
  plugins: [react(), tailwindcss()],
})
