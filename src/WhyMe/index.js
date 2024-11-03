// WhyMe.js
import styles from "./WhyMe.module.css";

function WhyMe() {
  return (
    <div className={styles.whyMeContainer}>
      <h2 className={styles.title}>Por Que Escolher a APJACSTUDIO</h2>
      <p className={styles.description}>
        Profissionais dedicados a capturar seus momentos mais especiais com
        qualidade e sensibilidade. Cada clique conta uma história única, pensada
        para eternizar suas memórias.
      </p>
      <div className={styles.grid}>
        <div className={`${styles.item} ${styles.active}`}>
          <span className={styles.icon}>✏️</span>
          <h3>Agência</h3>
          <p>
            Nosso estúdio é composto por uma equipe dedicada a capturar imagens
            que contam histórias. Oferecemos uma experiência profissional e
            personalizada para cada cliente.
          </p>
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>💡</span>
          <h3>Escolha de Ideias</h3>
          <p>
            Trabalhamos com você para transformar suas ideias em realidade.
            Desde o conceito até os detalhes, criamos ensaios fotográficos
            únicos que refletem sua visão.
          </p>
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>⭐</span>
          <h3>Satisfação Garantida</h3>
          <p>
            Nosso compromisso é com a sua satisfação. Buscamos superar suas
            expectativas, entregando fotos que você valorizará para sempre.
          </p>
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>⚡</span>
          <h3>Criatividade</h3>
          <p>
            omos apaixonados por capturar momentos de forma criativa e original.
            Cada foto é uma obra de arte que reflete a singularidade de cada
            cliente.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyMe;
