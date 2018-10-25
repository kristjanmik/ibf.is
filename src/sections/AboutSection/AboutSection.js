import React from "react";
import styles from "./AboutSection.module.scss";
import AboutCard from "../../components/AboutCard";
import Arrow from "../../components/Arrow";
import { H1, Body1 } from "../../components/Typography";

const AboutSection = ({ data: { main, aside } }) => (
  <div className={styles.root}>
    <div className={styles.text}>
      <H1 bottom="large">
        <strong>{main.title}</strong>
        {main.subtitle && (
          <span>
            <br />
            {main.subtitle}
          </span>
        )}
      </H1>
      <Body1>{main.text}</Body1>
      <Arrow alignment="vertical" className={styles.arrow} />
    </div>
    <AboutCard data={aside} />
  </div>
);

export default AboutSection;
