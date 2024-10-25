import React, { useState } from "react";
import styles from "./style.module.css";

import Image1 from "../assets/img1.png";
import Image2 from "../assets/img2.png";
import Image3 from "../assets/img3.png";
import Image4 from "../assets/img4.png";
import Image5 from "../assets/img5.png";
import Image6 from "../assets/img5.png";

const AboutUs = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { id: 1, src: Image1, alt: "Foto 1" },
    { id: 2, src: Image2, alt: "Foto 2" },
    { id: 3, src: Image3, alt: "Foto 3" },
    { id: 4, src: Image4, alt: "Foto 4" },
    { id: 5, src: Image5, alt: "Foto 5" },
    { id: 6, src: Image6, alt: "Foto 6" },
  ];

  const numVisibleSlides = 5;

  // Função para alterar o slide
  const mudarSlide = (direcao) => {
    let newIndex = slideIndex + direcao;

    // Faz o loop infinito das imagens
    if (newIndex < 0) {
      newIndex = slides.length - numVisibleSlides; // Volta ao final
    }
    if (newIndex >= slides.length - numVisibleSlides + 1) {
      newIndex = 0; // Volta ao início
    }

    setSlideIndex(newIndex);
  };

  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutText}>
        <h2>ABOUT US</h2>
        <p>
          Trincidunt Sagittis Mollis Nec Suspendisse Sed Felis Massa Urna Nec.
          Uma Quisque Blandit Turpis Ultrices Arcu Ut Sed. Ultricies Diam Est
          Aliquet Porta Fermentum Molestie Morbi Libero. Ultrices Sit In Elit
          Eget Nullam Sem. Uma Velit Imperdiet Habitand In.
        </p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span>+10</span>
          <p>Years Experience</p>
        </div>
        <div className={styles.statItem}>
          <span>+450</span>
          <p>Customers</p>
        </div>
        <div className={styles.statItem}>
          <span>+15K</span>
          <p>Portfolio Photos</p>
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
