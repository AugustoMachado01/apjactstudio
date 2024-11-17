import React from "react";
import styles from "./styles/SeeMoreButton.module.css";

const SeeMoreButton = ({ onClick }) => {
  return (
    <div className={styles.seeMoreButton} onClick={onClick}>
      veja mais →
    </div>
  );
};

export default SeeMoreButton;
