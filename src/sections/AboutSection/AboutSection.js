import React from "react";
import cn from "classnames";
import styles from "./AboutSection.module.scss";
import AboutCard from "../../components/AboutCard";
import Arrow from "../../components/Arrow";
import { H1, Body1 } from "../../components/Typography";
import padding from "../../utils/padding";

const AboutSection = ({ heading, text }) => (
  <div className={cn(styles.root, padding(null, "xlarge"))}>
    <div className={styles.text}>
      <H1 bottom="large">{heading}</H1>
      <Body1>{text}</Body1>
        <Arrow alignment="vertical" className={styles.arrow} />
    </div>
    <AboutCard />
  </div>
);

export default AboutSection;
