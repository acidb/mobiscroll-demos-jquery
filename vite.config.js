import { defineConfig } from 'vite';
import dyndateplugin from './dyndateplugin';

export default defineConfig({
  build: { chunkSizeWarningLimit: 2048 },
  plugins: [dyndateplugin()],
  define: {
    global: 'window',
  },
});
