import { defineConfig } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';
import solidDevtools from 'solid-devtools/vite';

// eslint-disable-next-line import/no-default-export -- app config requires a default export
export default defineConfig({
  server: { preset: 'cloudflare-module' },
  ssr: true,
  vite: {
    // @ts-expect-error -- Vinxi type error, hopefully to be addressed in a future update (or when Vinxi is removed)
    plugins: [solidDevtools({ autoname: true }), tailwindcss()],
  },
});
