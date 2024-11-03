import React from "react";

import styles from "./newsletter.module.css";

const Newsletter = () => {
  return (
    <section>
      <div className={styles.newsletter_container}>
        <h2>Get more info other discount prices</h2>
        <div className={styles.newsletter_form}>
          <input type="email" placeholder="Enter Your Email Address" />
          <button type="submit">Submit</button>
        </div>
        <p className={styles.newsletter_info}>
          * By clicking <strong>Submit</strong> button, you agree to our Terms
          and that you have read our <a href="#">Data Use Policy</a>.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
