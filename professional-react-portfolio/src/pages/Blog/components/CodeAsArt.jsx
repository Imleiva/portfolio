import React from "react";

const CodeAsArt = () => {
  const artEntry = {
    date: "4 Dic 2024",
    title: "La recursión como danza",
    code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
    palette: ["#7364d2", "#5829a7", "#97dffc", "#8eb5f0", "#858ae3", "#4e148c"],
    poem: `Llamarse a sí mismo,\nuna y otra vez,\nhasta encontrar el principio.\nComo el eco en la montaña,\ncomo el reflejo en el espejo...\nel código baila consigo mismo.`,
    description:
      "Este algoritmo de Fibonacci es como una danza recursiva. Se llama a sí mismo en un patrón hipnótico, creando una cascada de números que sigue la secuencia más famosa de la naturaleza... Los colores representan la profundidad de cada llamada. Belleza matemática pura.",
  };

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">🎨</span>
        <h2 className="blog-section-title">Código como Arte</h2>
      </div>
      <div className="blog-section-content">
        <div className="blog-entry">
          <div className="blog-entry-date">{artEntry.date}</div>
          <h3 className="blog-entry-title">{artEntry.title}</h3>
          <div className="code-art-container">
            <pre className="code-snippet">{artEntry.code}</pre>
            <div className="code-art-interpretation">
              <div>
                <h4
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    marginBottom: "0.75rem",
                    color: "var(--text-color)",
                  }}
                >
                  Paleta de Colores
                </h4>
                <div className="art-palette">
                  {artEntry.palette.map((color, index) => (
                    <div
                      key={index}
                      className="color-swatch"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    marginBottom: "0.75rem",
                    color: "var(--text-color)",
                  }}
                >
                  Interpretación Poética
                </h4>
                <div className="art-poem">{artEntry.poem}</div>
              </div>
              <p className="blog-entry-text">{artEntry.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeAsArt;
