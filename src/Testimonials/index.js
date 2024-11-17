import styles from "./testimonials.module.css";
import ClientImage1 from "../assets/Judith.jpg";
import ClientImage2 from "../assets/Abel.jpg";
import ClientImage3 from "../assets/Vania.jpg";

function Testimonials() {
  const testimonialsData = [
    {
      name: "Senhora Judith",
      image: ClientImage1,
      text: "Não poderíamos ter escolhido melhor fotógrafo para o nosso grande dia! A equipe da Apjacstudio capturou cada momento mágico do nosso casamento. Desde os preparativos até a festa, cada foto transmite a emoção que sentimos",
    },
    {
      name: "Senhor Abel",
      image: ClientImage2,
      text: "Contratei os serviços da Apjacstudio para o aniversário de 30 anos da minha irmã, e a experiência foi incrível. A equipe foi super profissional e atenciosa, tornando o evento ainda mais especial. As fotos capturaram a alegria e a diversão da festa, e agora temos memórias maravilhosas para relembrar.",
    },
    {
      name: "Senhora Vânia",
      image: ClientImage3,
      text: "Fizemos um ensaio fotográfico em família com a Apjacstudio e ficamos maravilhados com o resultado. A equipe foi muito gentil e paciente com as crianças, e conseguiu capturar a essência da nossa família de uma maneira natural e divertida.t...",
    },
  ];

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>TESTEMUNHAS</h2>
      <div className={styles.testimonialsGrid}>
        {testimonialsData.map((testimonial, index) => (
          <div className={styles.card} key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={styles.image}
            />
            <h3 className={styles.name}>{testimonial.name}</h3>
            <p className={styles.text}>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
