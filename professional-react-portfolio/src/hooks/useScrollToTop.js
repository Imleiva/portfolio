/*
 * useScrollToTop.js - Hook personalizado
 *
 * Cada vez que cambio de página, este hook me lleva automáticamente
 * al inicio para tener mejor experiencia de usuario.
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuando cambia la ruta, vuelvo al inicio
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]); // Se ejecuta cada vez que cambio de página
};
