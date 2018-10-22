import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./Section.module.scss";
import padding from "../../utils/padding";

const Section = ({ children, top, bottom, colored, backgroundText }) => (
  <div
    className={cn(styles.root, padding(top, bottom), colored && styles.colored)}
  >
    {backgroundText && (
      <span className={styles.backgroundText}>{backgroundText}</span>
    )}
    {children}
  </div>
);

Section.propTypes = {};

export default Section;
