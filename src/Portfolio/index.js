import React, { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import Gallery from "./components/Gallery ";
import SeeMoreButton from "./components/SeeMoreButton";
// import Image1 from "./components/assets/Rectangle 15.png";
import Wedding from "./components/assets/Wedding1.jpg";
import Wedding2 from "./components/assets/Wedding2.jpg";
import Wedding3 from "./components/assets/Wedding3.jpg";
import Wedding4 from "./components/assets/Wedding4.jpg";
import Wedding5 from "./components/assets/Wedding5.jpg";
import Fashion from "./components/assets/moda1.png";
import Fashion2 from "./components/assets/moda2.png";
import Fashion3 from "./components/assets/moda3.png";
import Fashion4 from "./components/assets/moda4.png";
import Fashion5 from "./components/assets/moda5.png";
import Commercials from "./components/assets/com.JPG";
import Commercials1 from "./components/assets/com1.JPG";
import Commercials2 from "./components/assets/com2.JPG";
import Corporate from "./components/assets/co.jpg";
import Corporate1 from "./components/assets/co1.jpg";
import Corporate2 from "./components/assets/co2.jpg";
import Institutional from "./components/assets/i.jpg";
import Institutional1 from "./components/assets/i1.jpg";
import styles from "./components/styles/Portfolio.module.css";

// institutional
const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleImages, setVisibleImages] = useState(6);

  const images = [
    // Coloque os links e categorias das suas imagens
    { src: Wedding, category: "Wedding" },
    { src: Wedding2, category: "Wedding" },
    { src: Wedding3, category: "Wedding" },
    { src: Wedding4, category: "Wedding" },
    { src: Wedding5, category: "Wedding" },
    { src: Fashion, category: "Fashion" },
    { src: Fashion2, category: "Fashion" },
    { src: Fashion3, category: "Fashion" },
    { src: Fashion4, category: "Fashion" },
    { src: Fashion5, category: "Fashion" },
    { src: Commercials, category: "commercials" },
    { src: Commercials1, category: "commercials" },
    { src: Commercials2, category: "commercials" },
    { src: Corporate, category: "corporate" },
    { src: Corporate1, category: "corporate" },
    { src: Corporate2, category: "corporate" },
    { src: Institutional, category: "institutional" },
    { src: Institutional1, category: "institutional" },
    // Continue com mais imagens conforme necessário
  ];

  const filteredImages = images.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory
  );

  const handleSeeMore = () => {
    setVisibleImages((prev) => prev + 6);
  };

  return (
    <div className={styles.portfolio} id="portfolio">
      <h2>PORTFOLIO</h2>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <Gallery images={filteredImages.slice(0, visibleImages)} />
      {visibleImages < filteredImages.length && (
        <SeeMoreButton onClick={handleSeeMore} />
      )}
    </div>
  );
};

export default Portfolio;
