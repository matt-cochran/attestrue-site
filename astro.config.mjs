import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://attestrue.com',
  base: '/',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
  },
})
