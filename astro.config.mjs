import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  server:{
		// port: 3000,
    port: 4321,
		host: true
	},
	vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname
      }
    }
  }
})
