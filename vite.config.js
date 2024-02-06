import { defineConfig } from 'vite';
import dyndateplugin from './dyndateplugin';

export default defineConfig({
  plugins: [dyndateplugin()],
});
