import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Vite configuration: serves the showcase app at / (index.html).
// Component fixtures live in src/components/**/__fixtures__ and are picked up
// by React Cosmos (`pnpm cosmos`), which reuses this config via its Vite plugin.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: '/'
  }
});
