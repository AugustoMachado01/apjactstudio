import React, { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import Gallery from "./components/Gallery ";
import SeeMoreButton from "./components/SeeMoreButton";
import Image1 from "./components/assets/Rectangle 15.png";
import styles from "./components/styles/Portfolio.module.css";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleImages, setVisibleImages] = useState(6);

  const images = [
    // Coloque os links e categorias das suas imagens
    { src: Image1, category: "Wedding" },
    { src: Image1, category: "Product" },
    { src: Image1, category: "Food" },
    { src: Image1, category: "Fashion" },
    { src: Image1, category: "Wedding" },
    { src: Image1, category: "Food" },
    { src: Image1, category: "Product" },
    { src: Image1, category: "Fashion" },
    { src: Image1, category: "Wedding" },
    // Continue com mais imagens conforme necessário
  ];

  const filteredImages = images.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory
  );

  const handleSeeMore = () => {
    setVisibleImages((prev) => prev + 6);
  };

  return (
    <div className={styles.portfolio}>
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
