import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames'
import styles from "./SectionFooter.module.scss";
import Arrow from "../Arrow";
import { Body2 } from "../Typography";

const SectionFooter = ({ text, url, textColor = "light" }) => (
  <div className={cn(styles.root, styles[textColor])}>
    <div className={styles.wrap}>
      <Body2 className={styles.text}>{text}</Body2>
      <Arrow rotation="90" color={textColor === 'light' ? '#FFF' : '#00468A'} />
    </div>
  </div>
);

SectionFooter.propTypes = {};

export default SectionFooter;
