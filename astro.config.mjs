import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import preact from '@astrojs/preact'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  i18n: {
    locales: ['en', 'sv'],
    defaultLocale: 'en',
  },
  output: 'server',
  adapter: cloudflare(),
  integrations: [preact({ compat: true })],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        'react/jsx-runtime': 'preact/jsx-runtime',
      },
    },
  },
  site: 'https://christophervestman.com',
})
