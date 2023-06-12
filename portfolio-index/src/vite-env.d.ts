/// <reference types="vite/client" />
import { defineConfig } from "vite";
import path from "path";

declare module '*.MOV' {
    const src: string;
    export default src;
  }
  

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});