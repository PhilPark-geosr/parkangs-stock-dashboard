/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { InlineConfig, UserConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['setupTests.tsx'],
  },

  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'node_modules', replacement: '/node_modules' },
    ],
  },
} as VitestConfigExport);
