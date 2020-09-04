import React from "react";
import PropTypes from "prop-types";
import styles from "./BenefitBox.module.scss";
import { H2, Body2 } from "src/ui/components/Typography";

const BenefitBox = ({ title, description }) => (
  <div className={styles.root}>
    <div className={styles.icon} />
    <H2 className={styles.title}>{title}</H2>
    <Body2 className={styles.description}>{description}</Body2>
  </div>
);

BenefitBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default BenefitBox;
