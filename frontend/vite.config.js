import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from "dotenv";

// โหลด .env จาก root folder
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// ✅ debug
//console.log("VITE_FRONT_HOST =", process.env.VITE_FRONT_HOST);
//console.log("VITE_FRONT_PORT =", process.env.VITE_FRONT_PORT);

export default defineConfig({
  plugins: [react()],
  server: {
    host: process.env.VITE_FRONT_HOST || "localhost",
    port: Number(process.env.VITE_FRONT_PORT) || 3000,
  },
});
