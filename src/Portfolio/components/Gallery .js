import React from "react";
import styles from "./styles/Gallery.module.css";

const Gallery = ({ images }) => {
  return (
    <div className={styles.grid}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img src={image.src} alt="" className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
