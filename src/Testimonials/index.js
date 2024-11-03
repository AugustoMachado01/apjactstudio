import styles from "./testimonials.module.css";
import Image1 from "../assets/festa.jpg";

function Testimonials() {
  const testimonialsData = [
    {
      name: "Jhon Mafuh",
      social: "Facebook",
      image: Image1, // Insira o caminho da imagem
      text: "Lorem ipsum dolor sit amet consectetur. Pellentesque eget sit...",
    },
    {
      name: "Verda Angel",
      social: "Instagram",
      image: Image1, // Insira o caminho da imagem
      text: "Lorem ipsum dolor sit amet consectetur. Pellentesque eget sit...",
    },
    {
      name: "Lovia Franceska",
      social: "Google",
      image: Image1, // Insira o caminho da imagem
      text: "Lorem ipsum dolor sit amet consectetur. Pellentesque eget sit...",
    },
  ];

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>TESTIMONIALS</h2>
      <div className={styles.testimonialsGrid}>
        {testimonialsData.map((testimonial, index) => (
          <div className={styles.card} key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={styles.image}
            />
            <h3 className={styles.name}>{testimonial.name}</h3>
            <p className={styles.social}>{testimonial.social}</p>
            <p className={styles.text}>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
