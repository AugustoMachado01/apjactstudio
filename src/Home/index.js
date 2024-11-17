import HomeImage from "../assets/home.png";
import styles from "./style.module.css";

export default function Home() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.title_container}>
        <img src={HomeImage} alt="camera" />

        <div className={styles.content}>
          <h1>APJACSTUDIO</h1>
          <p>
            Capturando momentos que contam histórias. Bem-vindo ao APJACSTUDIO.
          </p>
          <a href="#portfolio" className={styles.cta_button}>
            Ver Portfólio
          </a>
        </div>
      </div>
    </section>
  );
}
