import { defineConfig } from 'vite';

export default defineConfig({
  build: { chunkSizeWarningLimit: 2048 },
  plugins: [],
  define: {
    global: 'window',
  },
});
