import { useState } from "react";
import { Link } from "react-scroll";
import styles from "./style.module.css";
import Image from "../assets/Logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={Image} alt="Logo" className={styles.logoImage} />
      </div>
      <div
        className={`${styles.menuIcon} ${isMenuOpen ? styles.active : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </div>
      <ul style={{ display: isMenuOpen ? "flex" : "" }} className={styles.menu}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nós
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="testemonials"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            Testemunhas
          </Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}
