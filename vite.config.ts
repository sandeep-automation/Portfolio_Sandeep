import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const resumeDir = path.join(rootDir, 'public', 'resume')

function latestResumePdf() {
  if (!fs.existsSync(resumeDir)) return null

  const files = fs
    .readdirSync(resumeDir)
    .filter((name) => name.toLowerCase().endsWith('.pdf') && !name.startsWith('.'))
    .map((name) => {
      const fullPath = path.join(resumeDir, name)
      return { name, mtime: fs.statSync(fullPath).mtimeMs }
    })
    .sort((a, b) => b.mtime - a.mtime)

  return files[0]?.name ?? null
}

function latestResumePlugin(): Plugin {
  const virtualId = 'virtual:resume'
  const resolvedId = `\0${virtualId}`

  const source = () => {
    const name = latestResumePdf()
    if (!name) {
      throw new Error('Drop a PDF in public/resume/. Resume downloads the newest file in that folder after each build.')
    }

    return `export const resumeFileName = ${JSON.stringify(name)}
export const resumePublicPath = ${JSON.stringify(`resume/${name}`)}
`
  }

  return {
    name: 'latest-resume',
    resolveId(id) {
      if (id === virtualId) return resolvedId
    },
    load(id) {
      if (id === resolvedId) return source()
    },
    configureServer(server) {
      server.watcher.add(resumeDir)
      const reload = (file: string) => {
        const normalized = file.replaceAll('\\', '/')
        if (!normalized.toLowerCase().endsWith('.pdf') || !normalized.includes('/resume/')) return
        const mod = server.moduleGraph.getModuleById(resolvedId)
        if (mod) void server.reloadModule(mod)
      }
      server.watcher.on('add', reload)
      server.watcher.on('change', reload)
      server.watcher.on('unlink', reload)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), latestResumePlugin()],
  base: process.env.GITHUB_PAGES === 'true' ? '/Portfolio_Sandeep/' : '/',
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['sandeep.local'],
  },
})
