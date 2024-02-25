import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

// for deploying on github pages

export default defineConfig({
  plugins: [react()],
  base: '/react-flowbot-ui-kit/'
})
