import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

import Image1 from "../assets/capalanca.jpeg";
import Image2 from "../assets/festa.jpg";
import Image3 from "../assets/suzana.jpg";
import Image4 from "../assets/linkedin.jpg";
import Image5 from "../assets/comercial.jpg";
import Image6 from "../assets/marcia.jpg";
import Image7 from "../assets/festa1.jpg";
import Image8 from "../assets/festa2.jpg";
import Image9 from "../assets/festa3.jpg";
import Image10 from "../assets/kid.jpg";
import Image11 from "../assets/marcia1.jpg";

const AboutUs = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [numVisibleSlides, setNumVisibleSlides] = useState(5);

  const slides = [
    { id: 1, src: Image1, alt: "Foto 1" },
    { id: 2, src: Image2, alt: "Foto 2" },
    { id: 3, src: Image3, alt: "Foto 3" },
    { id: 4, src: Image4, alt: "Foto 4" },
    { id: 5, src: Image5, alt: "Foto 5" },
    { id: 6, src: Image6, alt: "Foto 6" },
    { id: 7, src: Image7, alt: "Foto 7" },
    { id: 8, src: Image8, alt: "Foto 8" },
    { id: 9, src: Image9, alt: "Foto 9" },
    { id: 10, src: Image10, alt: "Foto 10" },
    { id: 11, src: Image11, alt: "Foto 11" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setNumVisibleSlides(5);
      } else if (window.innerWidth >= 992) {
        setNumVisibleSlides(4);
      } else if (window.innerWidth >= 768) {
        setNumVisibleSlides(3);
      } else if (window.innerWidth >= 576) {
        setNumVisibleSlides(2);
      } else {
        setNumVisibleSlides(1);
      }
    };

    handleResize(); // Definir o número de slides visíveis no carregamento inicial
    window.addEventListener("resize", handleResize); // Atualizar o valor em caso de redimensionamento

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mudarSlide = (direcao) => {
    let newIndex = slideIndex + direcao;

    // Loop infinito das imagens
    if (newIndex < 0) {
      newIndex = slides.length - numVisibleSlides;
    }
    if (newIndex >= slides.length - numVisibleSlides + 1) {
      newIndex = 0;
    }

    setSlideIndex(newIndex);
  };

  return (
    <div id="about" className={styles.aboutSection}>
      <div className={styles.aboutText}>
        <h2>SOBRE NÓS</h2>
        <p className="Text">
          Somos uma empresa de fotografia e vídeo que oferece uma variedade de
          serviços relacionados à captura, edição de imagens e vídeos. Isso pode
          incluir: Eventos, Cobertura de casamentos, aniversários, festas
          corporativas e outros eventos sociais
        </p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span>+5</span>
          <p>Anos de experiência</p>
        </div>
        <div className={styles.statItem}>
          <span>+100</span>
          <p>Clientes</p>
        </div>
        <div className={styles.statItem}>
          <span>+3K</span>
          <p>Portifolio fotos</p>
        </div>
      </div>

      <div className={styles.slider}>
        <button className={styles.prev} onClick={() => mudarSlide(-1)}>
          &#10094;
        </button>
        <div className={styles.slides}>
          {slides
            .slice(slideIndex, slideIndex + numVisibleSlides)
            .map((slide) => (
              <div key={slide.id} className={styles.slide}>
                <img src={slide.src} alt={slide.alt} />
              </div>
            ))}
        </div>
        <button className={styles.next} onClick={() => mudarSlide(1)}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
