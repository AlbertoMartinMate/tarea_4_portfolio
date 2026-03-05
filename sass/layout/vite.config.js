import { defineConfig } from 'vite'

export default defineConfig({
  base: '/tarea_4_portfolio/',
  server: {
    open: {
      app: {
        name: 'google chrome',
        arguments: ['--new-window']
      }
    }
  }
})

