import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({

  server: {
    allowedHosts: [
      '4bc1-2401-4900-1c3f-9a16-11f1-57dc-e51b-b483.ngrok-free.app', // Add your ngrok host here
    ],
  },
  plugins: [
    react(),
    tailwindcss(),
   
  ],

})
