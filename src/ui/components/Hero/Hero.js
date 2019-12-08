import React from "react";
import styles from "./Hero.module.scss";
import { H1 } from "src/ui/components/Typography";
import SectionLegend from "src/ui/components/Section/components/SectionLegend";
import HeroMap from "./components/HeroMap";

const Hero = ({ children, title, description }) => {
  return (
    <div className={styles.root}>
      <SectionLegend number="01" text={title} />
      <H1 className={styles.heading}>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </H1>
      {children}
      <HeroMap />
    </div>
  );
};

export default Hero;
