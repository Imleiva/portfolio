/*
 * NoahPlatformer.jsx - Easter egg de Noah saltando entre proyectos
 *
 * Noah salta de botón en botón como si fueran plataformas:
 * MomMatch -> Museo (con jumpattack) -> Noahverso (donde descansa)
 */

import React, { useState, useEffect } from "react";
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

  // Bloquear scroll durante la animación sin que salte el layout
  useEffect(() => {
    if (isPlaying) {
      const scrollY = window.scrollY;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.paddingRight = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isPlaying]);

  // Detectar cuando el usuario hace hover sobre el grid de proyectos
  useEffect(() => {
    const portfolioGrid = document.querySelector(".portfolio-grid");

    const handleMouseEnter = () => {
      if (!isPlaying) {
        console.log("Hover detectado! Iniciando animación");
        startSequence();
      } else {
        console.log("Animación ya en curso, ignorando hover");
      }
    };

    if (portfolioGrid) {
      portfolioGrid.addEventListener("mouseenter", handleMouseEnter);
      console.log("Event listener agregado a:", portfolioGrid);
    } else {
      console.log("No se encontró .portfolio-grid");
    }

    return () => {
      if (portfolioGrid) {
        portfolioGrid.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [isPlaying]);

  const startSequence = () => {
    setIsPlaying(true);
    console.log("Iniciando secuencia");

    // Fase 0: Aparecer caminando desde fuera
    setCurrentPhase("appearing");

    // Mostrar enemigo desde el principio
    setShowEnemy(true);

    setTimeout(() => {
      console.log("Fase: falling - Saltar hacia abajo");
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
        "Fase: jumpattack - Saltar con ataque a Noahverso (Matrix slow-mo)"
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
        return noahWalking;
      case "falling":
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
        return noahJumping;
      case "jumpattack":
        return noahAttack;
      case "rest":
      case "rest2":
      case "disappear":
        return noahRest;
      default:
        return noahWalking;
    }
  };

  if (!currentPhase) return null;

  const spriteSheet = getSpriteSheet();
  const animationClass = `noah-sprite-${currentPhase}`;

  return (
    <>
      {currentPhase && (
        <div
          className={`noah-platformer ${animationClass}`}
          style={{
            backgroundImage: `url(${spriteSheet})`,
          }}
        />
      )}
      {showEnemy && (
        <img
          className={`noah-enemy ${enemyHit ? "noah-enemy-hit" : ""}`}
          src={ghostSvg}
          alt="Ghost"
        />
      )}
    </>
  );
};

export default NoahPlatformer;
