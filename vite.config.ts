/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [ react() ],
<<<<<<< HEAD
  base: '/alta_personal_frt/'
=======
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
  }
>>>>>>> main
} )
