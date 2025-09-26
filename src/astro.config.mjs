import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
      },
    },
  },
});