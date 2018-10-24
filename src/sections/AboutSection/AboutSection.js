import React from "react";
import cn from "classnames";
import styles from "./AboutSection.module.scss";
import AboutCard from "../../components/AboutCard";
import Arrow from "../../components/Arrow";
import { H1, Body1 } from "../../components/Typography";
import padding from "../../utils/padding";

const AboutSection = ({ data: { main, aside } }) => (
  <div className={cn(styles.root, padding(null, "xlarge"))}>
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
