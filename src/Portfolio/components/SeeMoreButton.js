import React from "react";
import styles from "./styles/SeeMoreButton.module.css";

const SeeMoreButton = ({ onClick }) => {
  return (
    <div className={styles.seeMoreButton} onClick={onClick}>
      See More →
    </div>
  );
};

export default SeeMoreButton;
