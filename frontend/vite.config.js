import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import removeConsole from "vite-plugin-remove-console";
import obfuscator from "vite-plugin-javascript-obfuscator";

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
    host: "127.0.0.1", // เปิดให้เข้าถึงจากที่อยู่ IP อื่น ๆ
    port: 3000, // หรือเลือกพอร์ตที่ต้องการ
  },
});
