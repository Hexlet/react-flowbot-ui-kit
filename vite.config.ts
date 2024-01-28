import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       // Could also be a dictionary or array of multiple entry points
//       entry: resolve(__dirname, 'src/app.tsx'),
//       name: 'hexlet-flowbot',
//       // the proper extensions will be added
//       fileName: 'hexlet-flowbot',
//     },
//     rollupOptions: {
//       external: ['react', 'react-dom'],
//       output: {
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM',
//         },
//       },
//     },
//   },
// })

export default defineConfig({
  plugins: [react()],
  base: '/react-flowbot-ui-kit/'
})