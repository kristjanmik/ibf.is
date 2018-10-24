import React from "react";
import cn from "classnames";
import styles from "./AboutSection.module.scss";
import AboutCard from "../../components/AboutCard";
import Arrow from "../../components/Arrow";
import { H1, Body1 } from "../../components/Typography";
import padding from "../../utils/padding";

const AboutSection = () => (
  <div className={cn(styles.root, padding(null, "xlarge"))}>
    <div className={styles.text}>
      <H1 bottom="large">Icelandic Blockchain Foundation</H1>
      <Body1>
        The Foundation was created on the 29th of March 2015 (originally
        Auraráð). The Foundation was established by a collective of individuals
        with a shared vision of the positive impact that cryptocurrencies and
        blockchain technology can have on the Icelandic economy.
      </Body1>
        <Arrow alignment="vertical" className={styles.arrow} />
    </div>
    <AboutCard />
  </div>
);

export default AboutSection;
