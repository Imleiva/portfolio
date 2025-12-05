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
      console.log("Fase: jumpattack - Saltar con ataque a Noahverso");
      setCurrentPhase("jumpattack");
      // Golpear al enemigo cuando Noah ataca
      setTimeout(() => {
        console.log("Enemigo golpeado!");
        setEnemyHit(true);
      }, 600);
    }, 9150);

    setTimeout(() => {
      console.log("Fase: walking3 - Caminar en Noahverso");
      setCurrentPhase("walking3");
    }, 10350);

    setTimeout(() => {
      console.log("Fase: running3 - Correr hasta el final");
      setCurrentPhase("running3");
    }, 11350);

    setTimeout(() => {
      console.log("Fase: rest - Descansar");
      setCurrentPhase("rest");
    }, 12350);

    setTimeout(() => {
      console.log("Fase: rest2 - Descansar mirando al otro lado");
      setCurrentPhase("rest2");
    }, 12450);

    setTimeout(() => {
      console.log("Fase: disappear - Desaparecer con interferencias");
      setCurrentPhase("disappear");
    }, 16850);

    setTimeout(() => {
      console.log("Finalizando");
      setCurrentPhase(null);
      setIsPlaying(false);
      setShowEnemy(false);
      setEnemyHit(false);
    }, 18350);
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
