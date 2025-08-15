import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import removeConsole from "vite-plugin-remove-console";
import obfuscator from "vite-plugin-javascript-obfuscator";
import path from 'path'
import dotenv from 'dotenv'


// โหลด .env จาก root project
dotenv.config({ path: path.resolve(__dirname, '../.env') })
export default defineConfig({
  plugins: [
    react(),
    removeConsole(),
    obfuscator({
      globalOptions: {
        debugProtection: true,
        disableConsoleOutput: true,
      },
    }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: {
        properties: {
          regex: /^_/,
        },
      },
    },
  },
  server: {
    host: process.env.HOST || 'localhost',
    port: Number(process.env.FRONT_PORT) || 5173,
  },
  define: {
    'import.meta.env.VITE_DOMAIN_NAME': JSON.stringify(process.env.VITE_DOMAIN_NAME),
  },
});
