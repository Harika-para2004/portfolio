import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harika</h1>
        <p className={styles.description}>
          I'm a full-stack developer enthusiastic about the oppurtunities using React and
          NodeJS. 
        </p>
        <a href="mailto:harikanagasudha@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="/" className={styles.contactBtn} download="HarikaNagasudhaP_Resume.pdf" >
          Download Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
