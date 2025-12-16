import React from "react";
import { useTranslation } from "react-i18next";

const BookReviews = () => {
  const { t } = useTranslation();
  const books = t("bookReviews.entries", { returnObjects: true });
  /*const books = [
    {
      date: "5 Dic 2024",
      title: "Cartas de Alejandra Pizarnik",
      review:
        "Ayer terminé de leer las cartas de Pizarnik... su creatividad era exquisita, belleza en su rareza. Cambiaba entre filosofía, letras y periodismo porque no encajaba en ningún molde. Escribía con una precisión obsesiva pero también con una libertad que rompía todo lo establecido. Leía a Artaud, Rimbaud, Baudelaire... se construyó a sí misma desde la literatura, cambiando hasta su propio nombre. Era rebelde, estrafalaria, subversiva frente a lo que se esperaba de ella. Sus cartas son ese diálogo constante consigo misma, con todas las que era... como si estuviera programando su propia identidad, iterando hasta encontrar una versión que pudiera habitar. Esa búsqueda infinita de lo perdido, esa tensión entre la precisión racional y el automatismo surrealista... es lo que siento cuando creo: buscando algo que no sé si existe pero que necesito encontrar.",
      tags: ["Poesía", "Identidad", "Creatividad"],
    },
    {
      date: "15 Nov 2024",
      title: "Cuentos de Edgar Allan Poe",
      review:
        "Poe construía atmósferas perfectas con palabras precisas. Cada frase te lleva un paso más adentro. Leo sus cuentos y pienso en arquitectura de código: cómo cada función lleva a la siguiente, cómo construyes suspense (o en nuestro caso, flujo) hasta que todo converge en un punto. 'El corazón delator' es como un bug que no puedes ignorar... está ahí, latiendo, recordándote que algo no está bien hasta que lo arreglas.",
      tags: ["Literatura", "Estructura", "Narrativa"],
    },
  ];*/

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">📚</span>
        <h2 className="blog-section-title">{t("bookReviews.title")}</h2>
      </div>
      <div className="blog-section-content">
        {books.map((book, index) => (
          <div key={index} className="blog-entry">
            <div className="blog-entry-date">{book.date}</div>
            <h3 className="blog-entry-title">{book.title}</h3>
            <p className="blog-entry-text">{book.review}</p>
            <div className="blog-entry-tags">
              {book.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="blog-entry-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookReviews;
