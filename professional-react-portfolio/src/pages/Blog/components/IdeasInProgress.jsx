import React from "react";
import { useTranslation } from "react-i18next";

const IdeasInProgress = () => {
  const { t } = useTranslation();
  const ideas = t("ideasInProgress.entries", { returnObjects: true });
  /*const ideas = [
    {
      date: "8 Dic 2024",
      title: "🎲 La Oca Personalizada",
      content: [
        "Jugando con mi hijo a la oca me di cuenta de algo: él tiene sus propias coletillas para todo. Cuando saca un 6 grita '¡6!! Tiro de nuevo porque me tocó 6...'. Cuando cae en un puente dice su versión de la regla. Son esas pequeñas cosas que hacen que cada partida sea única.",
        "Y entonces se me ocurrió: ¿y si grabo todas esas frases y creo una versión digital del juego? Imagina una oca donde las acciones se narran con su propia voz, con sus propias palabras. Cada casilla especial tendría su audio personalizado.",
        "Ah, y por supuesto, hay que incluir sus 'trucos'. Ese momento donde tira los dados 'de broma' una y otra vez hasta que saca un 4 o más para poder empezar la partida. Porque según él, esas no cuentan. Son tiros de prueba, ¿no?",
        "Es uno de esos proyectos que quiero hacer simplemente porque me hace ilusión. No tiene que ser perfecto, solo tiene que capturar esos momentos que dentro de unos años me va a encantar recordar.",
      ],
      tags: ["Proyecto personal", "Ideas", "Familia"],
    },
  ];*/

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">💡</span>
        <h2 className="blog-section-title">{t("ideasInProgress.title")}</h2>
      </div>
      <div className="blog-section-content">
        {ideas.map((idea, index) => (
          <div key={index} className="blog-entry">
            <div className="blog-entry-date">{idea.date}</div>
            <h3 className="blog-entry-title">{idea.title}</h3>
            {idea.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="blog-entry-text">
                {paragraph}
              </p>
            ))}
            <div className="blog-entry-tags">
              {idea.tags.map((tag, tagIndex) => (
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

export default IdeasInProgress;
