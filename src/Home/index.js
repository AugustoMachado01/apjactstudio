import Facebook from "../icons/facebook.png";
import Instagram from "../icons/linkedin.png";
import Twitter from "../icons/twitter.png";
import styles from "./style.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.title_container}>
        <h1>APJACSTUDIO</h1>
        <p>
          Capturando momentos que contam histórias. Bem-vindo ao APJACSTUDIO.
        </p>
        <a href="#portfolio" className={styles.cta_button}>
          Ver Portfólio
        </a>
      </div>
      {/* <div className={styles.social_icons_container}>
        <a href="#" className={styles.icon}>
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="#" className={styles.icon}>
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="#" className={styles.icon}>
          <img src={Instagram} alt="Instagram" />
        </a>
      </div> */}
    </section>
  );
}
