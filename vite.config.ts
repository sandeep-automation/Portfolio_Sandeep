import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.GITHUB_PAGES === 'true' ? '/Portfolio_Sandeep/' : '/',
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['sandeep.local'],
  },
})
