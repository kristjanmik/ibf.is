import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.scss";
import padding from '../../utils/padding'
import cn from 'classnames'

const Section = ({ children, top, bottom, colored,  }) => (
  <div className={cn(styles.root, padding(top, bottom), colored && styles.colored)}>
    {children}
  </div>
);

Section.propTypes = {
};

export default Section;
