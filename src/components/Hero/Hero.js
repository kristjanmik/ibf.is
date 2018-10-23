import React from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.scss";
import { H1 } from "../Typography";
import SectionLegend from "../SectionLegend";

const Hero = ({ heading, children }) => (
  <div className={styles.root}>
    <SectionLegend number="01" text="Icelandic Blockchain Foundation" />
    <H1 bottom="xlarge" className={styles.heading}>
      Our mission is to make Iceland <br /> the leader in{" "}
      <strong>blockchain</strong> <br />
      and <strong>cryptocurrency</strong> innovation <br /> and adoption.
      <br />
    </H1>
    {children}
  </div>
);

Hero.propTypes = {
  heading: PropTypes.node.isRequired,
};

export default Hero;
