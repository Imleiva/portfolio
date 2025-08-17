/*
 * Configuración de Vite para mi portfolio
 *
 * Vite es muy rápido y me gusta su simplicidad.
 * Por ahora mantengo la config básica
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Configuración para GitHub Pages
  base: "/portfolio/",

  // Configuración para el desarrollo
  server: {
    port: 5173,
    open: true, // Abre el navegador automáticamente
  },

  // Optimizaciones para el build
  build: {
    outDir: "dist",
    sourcemap: false, // No necesito sourcemaps en producción
  },
});
