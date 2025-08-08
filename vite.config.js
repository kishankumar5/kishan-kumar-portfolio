import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ✅ crucial for Render
    port: 3000       // optional, but good to specify
  },
    preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['kishan-kumar-portfolio.onrender.com']  // ✅ Add your domain here
  }
})
