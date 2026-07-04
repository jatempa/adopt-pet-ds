import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration: serves the showcase app at / (index.html)
// The actual component stories live under src/cosmos and are picked up by React Cosmos
// when you run `npm run cosmos`.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: '/'
  }
});
