/*
 * index.jsx - El punto de entrada de mi portfolio
 *
 * Aquí es donde React se conecta al DOM.
 * Es simple pero importante - el primer archivo que se ejecuta.
 */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n/config"; // Cargo la configuración de idiomas

// Busco el elemento raíz donde vive mi portfolio
const container = document.getElementById("root");
const root = createRoot(container);

// Renderizo toda mi aplicación con modo estricto para mejores prácticas
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
