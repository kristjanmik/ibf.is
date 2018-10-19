import React from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.scss";
import { H1 } from "../Typography";
import SectionLegend from "../SectionLegend";

const Hero = ({ children }) => (
  <div className={styles.root}>
    <SectionLegend number="01" text="Icelandic Blockchain Foundation" />
    <H1 bottom="xlarge" className={styles.heading}>
      {children}
    </H1>
  </div>
);

Hero.propTypes = {
  heading: PropTypes.node.isRequired,
};

export default Hero;
