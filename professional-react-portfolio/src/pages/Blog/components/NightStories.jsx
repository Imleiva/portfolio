import React from "react";

const NightStories = () => {
  const stories = [
    {
      date: "4 Dic 2024 - 2:14 AM",
      title: "El bug que solo aparece a las 2:14am",
      text: "Hay un bug en mi aplicación que literalmente solo aparece a las 2:14 AM. No es un problema de zona horaria. No es caché. Es como si el código decidiera tener vida propia a esa hora específica. He pasado tres noches seguidas esperando las 2:14 para reproducirlo. La respuesta: un timer mal configurado que se ejecuta exactamente 14 minutos después de medianoche + 2 horas de diferencia horaria del servidor. Mystery solved at 2:14 AM.",
      tags: ["Bug", "Horarios", "Misterios nocturnos"],
    },
    {
      date: "2 Dic 2024 - 3:47 AM",
      title: "¿Por qué programar de noche parece más fácil?",
      text: "Hay algo mágico en programar de noche. Sin notificaciones, sin Slack, sin reuniones. Solo yo, el código y el silencio. Mi teoría: durante el día usamos el cerebro lógico para todo. De noche, cuando el mundo duerme, el cerebro creativo toma el control. Los bugs se resuelven solos, las soluciones aparecen de la nada. O quizás es solo que estoy más relajada sin presión externa.",
      tags: ["Reflexión", "Noche", "Creatividad"],
    },
    {
      date: "28 Nov 2024 - 4:23 AM",
      title: "Lo que aprendí después de un deploy a deshoras",
      text: "Regla #1: Nunca hagas deploy a las 4 AM. Regla #2: Si lo haces, asegúrate de estar 100% despierta. Regla #3: Si rompes la regla #2, ten el rollback preparado. Esta noche rompí las 3 reglas. El deploy fue exitoso pero olvidé actualizar las variables de entorno. El sitio estuvo caído 15 minutos hasta que me di cuenta. Lección aprendida: la madrugada no es amiga de la producción.",
      tags: ["Deploy", "Errores", "Lecciones"],
    },
  ];

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">🌙</span>
        <h2 className="blog-section-title">Historias Nocturnas del Código</h2>
      </div>
      <div className="blog-section-content">
        {stories.map((story, index) => (
          <div key={index} className="blog-entry">
            <div className="blog-entry-date">{story.date}</div>
            <h3 className="blog-entry-title">{story.title}</h3>
            <p className="blog-entry-text">{story.text}</p>
            <div className="blog-entry-tags">
              {story.tags.map((tag, tagIndex) => (
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

export default NightStories;
