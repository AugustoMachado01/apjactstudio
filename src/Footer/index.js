import React from "react";
import styles from "./footer.module.css";

import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_brand}>
        <h2>GRAPHER SHOT.</h2>
        <p>&copy; Copyright 2022 | Photographer</p>
      </div>
      <div className={styles.footer_social}>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaGoogle />
        </a>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
