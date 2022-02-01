import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  plugins: [
    react(),
    svgrPlugin({
      // 참고: https://react-svgr.com/docs/options/
      svgrOptions: {
        // icon: true,
        // title: true,
      },
    }),
    // 참고: https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
    process.env.NODE_ENV &&
      legacy({
        targets: ['defaults', 'ie 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
  ].filter(Boolean),

  envPrefix: 'EUID_',

  server: {
    port: 3000,
  },

  build: {
    outDir: 'build',
  },

  preview: {
    host: true,
    port: 8080,
    open: true,
  },
});
