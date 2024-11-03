import React from "react";
import styles from "../components/styles/ImageGrid.module.css";

const ImageGrid = ({ images }) => {
  return (
    <div className={styles.imageGrid}>
      {images.map((img) => (
        <div key={img.id} className={styles.imageItem}>
          <img src={img.src} alt={img.category} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
