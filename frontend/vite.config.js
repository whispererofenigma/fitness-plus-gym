import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      allowedHosts: [
        '4bc1-2401-4900-1c3f-9a16-11f1-57dc-e51b-b483.ngrok-free.app', // Add your ngrok host here
      ],
    },
    plugins: [
      react(),
      tailwindcss(),
    ],
    define: {
      __API_URL__: JSON.stringify(env.VITE_API_URL), // Example of using env variable
    },
  };
});
