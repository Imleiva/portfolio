import React from "react";
import { useTranslation } from "react-i18next";

const Inspirations = () => {
  const { t } = useTranslation();
  const inspirations = t("inspirations.entries", { returnObjects: true });
  /*const inspirations = [
    {
      icon: "📚",
      title: "Leer",
      text: "Todo tipo de cosas... desde fantasía hasta ensayos sobre diseño. Cada libro es una puerta a otra forma de pensar.",
    },
    {
      icon: "🎨",
      title: "Libros de ilustración",
      text: "Hojear libros de ilustración es mi debilidad. Me puedo pasar horas mirando el trabajo de otros artistas, absorbiendo técnicas y estilos.",
    },
    {
      icon: "📌",
      title: "Pinterest y Figma",
      text: "Busco en Pinterest, guardo referencias, y luego las organizo en mi mural de ideas en Figma. Es mi proceso para dar forma a lo que tengo en la cabeza.",
    },
    {
      icon: "🌳",
      title: "Paseos por el campo o la ciudad",
      text: "Caminar sin rumbo fijo. Observar detalles que normalmente pasarían desapercibidos. Ahí es donde encuentro muchas ideas.",
    },
    {
      icon: "🎵",
      title: "Música variada",
      text: "Desde Soul hasta Metal... mi playlist es un caos organizado. Cada estilo me pone en un mood diferente para crear.",
    },
    {
      icon: "📖",
      title: "Visitar librerías",
      text: "Simplemente una de mis actividades favoritas. No necesito comprar nada, solo estar ahí rodeada de libros y posibilidades.",
    },
    {
      icon: "✏️",
      title: "Dibujar",
      text: "A veces digital, a veces en papel. Dibujar es mi forma de desconectar y reconectar al mismo tiempo.",
    },
    {
      icon: "🔍",
      title: "Rastrear cosas curiosas",
      text: "Soy rastreadora de objetos antiguos, raros, curiosos... Mercadillos, tiendas de segunda mano, rincones olvidados. Cada objeto tiene una historia.",
    },
  ];*/

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">✨</span>
        <h2 className="blog-section-title">{t("inspirations.title")}</h2>
      </div>
      <div className="inspiration-grid">
        {inspirations.map((inspiration, index) => (
          <div key={index} className="inspiration-card">
            <div className="inspiration-icon">{inspiration.icon}</div>
            <h3 className="inspiration-title">{inspiration.title}</h3>
            <p className="inspiration-text">{inspiration.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspirations;
