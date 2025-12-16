import React from "react";
import { useTranslation } from "react-i18next";

const PsychologicalPatterns = () => {
  const { t } = useTranslation();
  const patterns = t("psychologicalPatterns.entries", { returnObjects: true });
  /*const patterns = [
    {
      date: "4 Dic 2024",
      title: "La ansiedad diseña interfaces defensivas",
      text: "He notado que cuando estoy ansiosa, diseño interfaces con demasiadas advertencias, demasiados mensajes de confirmación, demasiadas validaciones. Es como si proyectara mi necesidad de control en cada formulario. Curioso cómo nuestro estado emocional se cuela en cada decisión de diseño.",
      tags: ["UX", "Psicología", "Ansiedad"],
    },
    {
      date: "2 Dic 2024",
      title: "El sesgo de confirmación en el debugging",
      text: "Cuando estoy convencida de que el bug está en el backend, solo busco evidencia de que está en el backend. Ignoro completamente que podría ser el CSS. El sesgo de confirmación en programación es real: buscamos lo que queremos encontrar, no lo que realmente está roto.",
      tags: ["Debug", "Sesgos cognitivos"],
    },
    {
      date: "30 Nov 2024",
      title: "La tolerancia a la frustración y el arte del debug",
      text: "He aprendido que el debugging no es solo encontrar errores, es entrenar la tolerancia a la frustración. Cada bug que resuelvo es una pequeña victoria contra mi impulso de rendirme. Es terapéutico de una forma extraña.",
      tags: ["Debug", "Resiliencia", "Crecimiento"],
    },
  ];*/

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">🧠</span>
        <h2 className="blog-section-title">
          {t("psychologicalPatterns.title")}
        </h2>
      </div>
      <div className="blog-section-content">
        {patterns.map((pattern, index) => (
          <div key={index} className="blog-entry">
            <div className="blog-entry-date">{pattern.date}</div>
            <h3 className="blog-entry-title">{pattern.title}</h3>
            <p className="blog-entry-text">{pattern.text}</p>
            <div className="blog-entry-tags">
              {pattern.tags.map((tag, tagIndex) => (
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

export default PsychologicalPatterns;
