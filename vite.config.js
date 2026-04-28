import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // network par accessible
    port: 5173       // default port
  },
  resolve: {
    dedupe: ['three']   // ← Yeh add kiya — duplicate three.js fix
  },
  optimizeDeps: {
    exclude: ['three']  // ← Yeh add kiya — Vite bundling issue fix
  }
})