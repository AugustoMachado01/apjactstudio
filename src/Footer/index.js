import React from "react";
import styles from "./footer.module.css";

import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_brand}>
        <h2>APJAC STUDIO.</h2>
        <p>&copy; Direitos autorais 2024 | Ajacstudio</p>
      </div>
      <div className={styles.footer_social}>
        <a href="https://api.whatsapp.com/send?phone=938493359">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/apjac_studio/">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61558179821691">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/company/105419818/admin/dashboard/">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
