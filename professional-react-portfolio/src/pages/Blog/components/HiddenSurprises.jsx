import React from "react";

const HiddenSurprises = () => {
  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">🎮</span>
        <h2 className="blog-section-title">Sorpresas Escondidas</h2>
      </div>
      <div className="blog-section-content">
        <div className="blog-entry">
          <div className="blog-entry-date">5 Dic 2024</div>
          <h3 className="blog-entry-title">Noah: El Easter Egg Platformer</h3>
          <p className="blog-entry-text">
            Me encanta esconder pequeñas sorpresas en los sitios que creo... Es
            como dejar migas de pan para quien tenga curiosidad de explorar. Por
            eso añadí un easter egg donde Noah (mi personaje pixel art) cobra
            vida y salta entre los proyectos como si fueran plataformas.
          </p>
          <p className="blog-entry-text">
            La animación tiene 12 fases: Noah aparece caminando desde el header,
            cae con una curva suave, camina y corre por los botones de los
            proyectos, hace dos saltos (uno normal y otro con ataque contra un
            fantasma), y finalmente descansa mirando hacia atrás antes de
            desaparecer con un efecto glitch.
          </p>
          <p className="blog-entry-text">
            Todo está hecho con CSS puro y sprite sheets. Dura 18 segundos y se
            activa con un simple hover. Mi parte favorita es que el momento del
            ataque va en cámara lenta... porque si vas a hacer un ataque
            espectacular, mejor que se aprecie cada frame ¿no?
          </p>
          <p className="blog-entry-text">
            <strong>Pista:</strong> Visita la sección de Portfolio y pasa el
            cursor sobre la galería de proyectos...
          </p>
          <div className="blog-entry-tags">
            <span className="blog-entry-tag">Easter Egg</span>
            <span className="blog-entry-tag">CSS Animation</span>
            <span className="blog-entry-tag">Pixel Art</span>
            <span className="blog-entry-tag">UX Design</span>
          </div>
        </div>

        <div className="blog-entry">
          <div className="blog-entry-date">5 Dic 2024</div>
          <h3 className="blog-entry-title">Detalles que hacen la diferencia</h3>
          <p className="blog-entry-text">
            Los easter eggs no son solo "extras divertidos". Son una forma de
            conectar con quien visita tu trabajo. Cuando alguien descubre algo
            inesperado, se crea un momento memorable... y eso es lo que me
            gusta.
          </p>
          <p className="blog-entry-text">
            En este portfolio hay varios elementos sorpresa esperando. Algunos
            son obvios, otros requieren un poco más de curiosidad. La idea es
            recompensar la exploración y hacer que cada visita sea única.
          </p>
          <p className="blog-entry-text">
            Un portfolio no debería ser solo una lista de proyectos. Debería
            contar quién eres, cómo piensas, qué te hace diferente. Y a veces
            eso se transmite mejor con un pequeño personaje saltando entre
            botones que con mil palabras. 🎯
          </p>
          <div className="blog-entry-tags">
            <span className="blog-entry-tag">Filosofía</span>
            <span className="blog-entry-tag">UX</span>
            <span className="blog-entry-tag">Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenSurprises;
