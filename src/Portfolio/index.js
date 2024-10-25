import Facebook from "../icons/facebook.png";
import Instagram from "../icons/linkedin.png";
import Twitter from "../icons/twitter.png";
import Google from "../assets/noah-buscher-1-kPytLsVkY-unsplash-PhotoRoom.png";

import styles from "./style.module.css";

export default function Portfolio() {
  return (
    <section className={styles.hero}>
      <div className={styles.title_container}>
        <h1>APJACSTUDIO</h1>
        <p>Pellentesque Mauris A Lobortis...</p>
      </div>
      <div className={styles.image_container}>
        <a href="#" className={styles.cta_button}>
          Order Now
        </a>
        <img src={Google} alt="Photographer Image" />
      </div>
      <div className={styles.social_icons_container}>
        <span className={styles.line}></span>
        <a href="#" className={styles.icon}>
          <img src={Facebook} alt="" />
        </a>
        <a href="#" className={styles.icon}>
          <img src={Twitter} alt="" />
        </a>
        <a href="#" className={styles.icon}>
          <img src={Instagram} alt="" />
        </a>
        <span className={styles.line}></span>
      </div>
    </section>
  );
}
