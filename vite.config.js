import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/supply_chain_react/',  // 👈 Add this line
  plugins: [react()],
})
