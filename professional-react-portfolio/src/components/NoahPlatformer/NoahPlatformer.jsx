/*
 * NoahPlatformer.jsx - Easter egg de Noah saltando entre proyectos
 *
 * Noah salta de botón en botón como si fueran plataformas:
 * MomMatch -> Museo (con jumpattack) -> Noahverso (donde descansa)
 */

import React, { useState, useEffect, useRef } from "react";
import noahWalking from "../../assets/Sprite Sheets/PJNOAH_walking.png";
import noahRunning from "../../assets/Sprite Sheets/PJNOAH_running.png";
import noahJumping from "../../assets/Sprite Sheets/PJNOAH_jumping.png";
import noahRest from "../../assets/Sprite Sheets/PJNOAH_rest.png";
import noahAttack from "../../assets/Sprite Sheets/PJNOAH_attack.png";
import ghostSvg from "../../assets/Sprite Sheets/ghost.svg";
import "./NoahPlatformer.css";

const NoahPlatformer = () => {
  const [currentPhase, setCurrentPhase] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEnemy, setShowEnemy] = useState(false);
  const [enemyHit, setEnemyHit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [positions, setPositions] = useState(null);
  const positionsRef = useRef(null); // Guardar posiciones en ref para acceso inmediato
  const observerRef = useRef(null); // Guardar referencia al observer
  const playCountRef = useRef(0); // Contador de reproducciones
  const scrollPositionRef = useRef(0); // Guardar posición del scroll
  const maxPlays = 1; // Máximo número de reproducciones permitidas

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Bloquear scroll durante la animación sin que salte el layout
  useEffect(() => {
    if (isPlaying) {
      // Guardar la posición actual en el ref
      scrollPositionRef.current = window.scrollY;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        // Remover estilos
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.paddingRight = "";

        // Restaurar scroll instantáneamente sin animación
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: "instant",
        });
      };
    }
  }, [isPlaying]);

  // Detectar cuando el usuario hace hover sobre el grid (desktop) o entra en viewport (móvil)
  useEffect(() => {
    const portfolioGrid = document.querySelector(".portfolio-grid");
    let hoverTimeout = null;
    let observerTimeout = null;

    // Desktop: hover sobre el grid
    const handleMouseEnter = () => {
      if (!isPlaying && !isMobile && playCountRef.current < maxPlays) {
        hoverTimeout = setTimeout(() => {
          playCountRef.current += 1;
          startSequence();
        }, 800);
      }
    };

    const handleMouseLeave = () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }
    };

    // Móvil: Intersection Observer en la tarjeta de Noahverso
    let observer;
    let attempts = 0;
    const maxAttempts = 20;

    const setupObserver = () => {
      attempts++;
      const portfolioGrid = document.querySelector(".portfolio-grid");
      if (!portfolioGrid && attempts < maxAttempts) {
        setTimeout(setupObserver, 100);
        return;
      }
      if (!portfolioGrid) return;

      if (isMobile) {
        const allLinks = document.querySelectorAll(
          '.project-link, a[href*="/portfolio/"]',
        );
        const noahversoButton = Array.from(allLinks).find(
          (link) => link.href && link.href.includes("/portfolio/noahverso"),
        );

        if (noahversoButton) {
          const noahversoCard = noahversoButton.closest(".project-card");
          const elementToObserve = noahversoCard || noahversoButton;

          const leivaRollButton = Array.from(allLinks).find(
            (link) => link.href && link.href.includes("/portfolio/leiva-roll"),
          );

          if (leivaRollButton) {
            const leivaRollRect = leivaRollButton.getBoundingClientRect();
            const noahversoRect = noahversoButton.getBoundingClientRect();
            const calculatedPositions = {
              leivaroll: {
                top: leivaRollRect.top + window.scrollY - 46,
                left: leivaRollRect.left + leivaRollRect.width / 2,
              },
              noahverso: {
                top: noahversoRect.top + window.scrollY - 46,
                left: noahversoRect.left + noahversoRect.width * 0.2,
              },
              platform: {
                top: noahversoRect.top + window.scrollY - 140,
                left: noahversoRect.left + noahversoRect.width / 2 - 120,
              },
            };
            positionsRef.current = calculatedPositions;
            setPositions(calculatedPositions);
          }

          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (
                  entry.isIntersecting &&
                  entry.intersectionRatio === 1 &&
                  !isPlaying &&
                  playCountRef.current < maxPlays
                ) {
                  playCountRef.current += 1;
                  startSequence();
                }
              });
            },
            {
              threshold: 1.0,
              rootMargin: "-200px 0px -200px 0px",
            },
          );
          observerRef.current = observer;
          observer.observe(elementToObserve);
        } else if (attempts < maxAttempts) {
          setTimeout(setupObserver, 100);
        }
      }
    };

    if (isMobile) {
      setupObserver();
    }

    // Desktop event listeners
    if (portfolioGrid && !isMobile) {
      portfolioGrid.addEventListener("mouseenter", handleMouseEnter);
      portfolioGrid.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      if (observerTimeout) clearTimeout(observerTimeout);
      if (observer) observer.disconnect();
      if (portfolioGrid && !isMobile) {
        portfolioGrid.removeEventListener("mouseenter", handleMouseEnter);
        portfolioGrid.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isPlaying, isMobile]);

  // Recalcula posiciones justo antes de animar (móvil)
  const recalculatePositions = () => {
    const allLinks = document.querySelectorAll(
      '.project-link, a[href*="/portfolio/"]',
    );
    const leivaRollButton = Array.from(allLinks).find(
      (link) => link.href && link.href.includes("/portfolio/leiva-roll"),
    );
    const noahversoButton = Array.from(allLinks).find(
      (link) => link.href && link.href.includes("/portfolio/noahverso"),
    );
    if (leivaRollButton && noahversoButton) {
      const leivaRollRect = leivaRollButton.getBoundingClientRect();
      const noahversoRect = noahversoButton.getBoundingClientRect();
      const calculatedPositions = {
        leivaroll: {
          top: leivaRollRect.top + window.scrollY - 46,
          left: leivaRollRect.left + leivaRollRect.width / 2,
        },
        noahverso: {
          top: noahversoRect.top + window.scrollY - 46,
          left: noahversoRect.left + noahversoRect.width * 0.2,
        },
        platform: {
          top: noahversoRect.top + window.scrollY - 140,
          left: noahversoRect.left + noahversoRect.width / 2 - 120,
        },
      };
      positionsRef.current = calculatedPositions;
      setPositions(calculatedPositions);
      return true;
    }
    return false;
  };

  const startSequence = () => {
    // Para móvil, recalcula posiciones justo antes de animar
    if (isMobile) {
      const ok = recalculatePositions();
      if (!ok) {
        // Si no se pueden calcular, no animar
        return;
      }
    }
    setIsPlaying(true);
    if (isMobile) {
      startMobileSequence();
    } else {
      startDesktopSequence();
    }
  };

  const startMobileSequence = () => {
    // Secuencia móvil: Header -> Botón Museo -> Plataforma flotante -> Botón Noahverso (con ataque y saltitos+glitch)

    // Fase 0: Aparecer caminando desde el header
    setCurrentPhase("appearing-mobile");
    setShowEnemy(true);

    setTimeout(() => {
      setCurrentPhase("falling-mobile");
    }, 1000);

    setTimeout(() => {
      console.log("Fase móvil: on-museo - Aterrizar en botón Leiva Roll");
      setCurrentPhase("on-museo");
    }, 2000);

    setTimeout(() => {
      console.log("Fase móvil: jump-platform - Saltar a plataforma flotante");
      setCurrentPhase("jump-platform");
    }, 2800);

    setTimeout(() => {
      console.log("Fase móvil: on-platform - Aterrizar en plataforma");
      setCurrentPhase("on-platform");
    }, 3800);

    setTimeout(() => {
      console.log(
        "Fase móvil: jumpattack-mobile - Saltar con ataque a Noahverso",
      );
      setCurrentPhase("jumpattack-mobile");
      // Golpear al enemigo
      setTimeout(() => {
        console.log("Enemigo golpeado en móvil!");
        setEnemyHit(true);
      }, 1300);
    }, 4500);

    setTimeout(() => {
      console.log("Fase móvil: victory-mobile - Saltitos de victoria + glitch");
      setCurrentPhase("victory-mobile");
    }, 6500);

    setTimeout(() => {
      console.log("Finalizando móvil");
      setCurrentPhase(null);
      setIsPlaying(false);
      setShowEnemy(false);
      setEnemyHit(false);
      console.log(
        "✅ Animación finalizada, esperando que el usuario salga del área",
      );
    }, 8000);
  };

  const startDesktopSequence = () => {
    // Secuencia desktop original
    setCurrentPhase("appearing");
    setShowEnemy(true);

    setTimeout(() => {
      setCurrentPhase("falling");
    }, 1500);

    setTimeout(() => {
      console.log("Fase: walking1 - Caminar en MomMatch");
      setCurrentPhase("walking1");
    }, 2500);

    setTimeout(() => {
      console.log("Fase: running1 - Coger carrerilla");
      setCurrentPhase("running1");
    }, 4200);

    setTimeout(() => {
      console.log("Fase: jump1 - Saltar a Museo");
      setCurrentPhase("jump1");
    }, 6000);

    setTimeout(() => {
      console.log("Fase: walking2 - Caminar en Museo");
      setCurrentPhase("walking2");
    }, 6650);

    setTimeout(() => {
      console.log("Fase: running2 - Coger carrerilla");
      setCurrentPhase("running2");
    }, 8150);

    setTimeout(() => {
      console.log(
        "Fase: jumpattack - Saltar con ataque a Noahverso (Matrix slow-mo)",
      );
      setCurrentPhase("jumpattack");
      // Golpear al enemigo cuando Noah ataca (65% del salto para coincidir con la bola)
      setTimeout(() => {
        console.log("Enemigo golpeado!");
        setEnemyHit(true);
      }, 1300);
    }, 9150);

    setTimeout(() => {
      console.log("Fase: walking3 - Caminar en Noahverso");
      setCurrentPhase("walking3");
    }, 11150);

    setTimeout(() => {
      console.log("Fase: running3 - Correr hasta el final");
      setCurrentPhase("running3");
    }, 12150);

    setTimeout(() => {
      console.log("Fase: rest - Descansar");
      setCurrentPhase("rest");
    }, 13150);

    setTimeout(() => {
      console.log("Fase: rest2 - Descansar mirando al otro lado");
      setCurrentPhase("rest2");
    }, 13250);

    setTimeout(() => {
      console.log("Fase: disappear - Desaparecer con interferencias");
      setCurrentPhase("disappear");
    }, 17650);

    setTimeout(() => {
      console.log("Finalizando");
      setCurrentPhase(null);
      setIsPlaying(false);
      setShowEnemy(false);
      setEnemyHit(false);
    }, 19150);
  };

  const getSpriteSheet = () => {
    switch (currentPhase) {
      case "appearing":
      case "appearing-mobile":
        return noahWalking;
      case "falling":
      case "falling-mobile":
        return noahJumping;
      case "walking1":
      case "walking2":
      case "walking3":
        return noahWalking;
      case "running1":
      case "running2":
      case "running3":
        return noahRunning;
      case "jump1":
      case "jump-museo":
      case "jump-platform":
      case "victory-mobile":
        return noahJumping;
      case "on-museo":
      case "on-platform":
        return noahWalking;
      case "jumpattack":
      case "jumpattack-mobile":
        return noahAttack;
      case "rest":
      case "rest2":
      case "rest-mobile":
      case "rest2-mobile":
      case "disappear":
      case "disappear-mobile":
        return noahRest;
      default:
        return noahWalking;
    }
  };

  if (!currentPhase) return null;

  const spriteSheet = getSpriteSheet();
  const animationClass = `noah-sprite-${currentPhase}`;

  // Estilos dinámicos para móvil con posiciones calculadas
  const mobileStyle =
    isMobile && positions
      ? {
          "--leivaroll-top": `${positions.leivaroll.top}px`,
          "--leivaroll-left": `${positions.leivaroll.left}px`,
          "--noahverso-top": `${positions.noahverso.top}px`,
          "--noahverso-left": `${positions.noahverso.left}px`,
          // Plataforma independiente, centrada respecto al botón
          "--platform-top": `${positions.platform.top}px`,
          "--platform-left": `${positions.platform.left}px`,
        }
      : {};

  return (
    <>
      {currentPhase && (
        <div
          className={`noah-platformer ${animationClass} ${
            isMobile ? "noah-mobile" : ""
          }`}
          style={{
            backgroundImage: `url(${spriteSheet})`,
            ...mobileStyle,
          }}
        />
      )}
      {showEnemy && (
        <img
          className={`noah-enemy ${enemyHit ? "noah-enemy-hit" : ""} ${
            isMobile ? "noah-enemy-mobile" : ""
          }`}
          src={ghostSvg}
          alt="Ghost"
          style={
            isMobile && positions
              ? {
                  "--noahverso-top": `${positions.noahverso.top}px`,
                  "--noahverso-left": `${positions.noahverso.left}px`,
                }
              : {}
          }
        />
      )}
      {/* Plataforma flotante visible durante toda la animación móvil */}
      {isMobile && currentPhase && positions && (
        <div
          className={`noah-floating-platform ${
            currentPhase === "jumpattack-mobile" ||
            currentPhase === "victory-mobile" ||
            currentPhase === "rest-mobile" ||
            currentPhase === "rest2-mobile" ||
            currentPhase === "disappear-mobile"
              ? "fade-out"
              : ""
          }`}
          style={{
            top: `${positions.platform.top}px`,
            left: `${positions.platform.left}px`,
          }}
        ></div>
      )}
    </>
  );
};

export default NoahPlatformer;
