import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/crm-web',
  build: {
    outDir: 'dist',  // Output directory for the build files
  }
})
