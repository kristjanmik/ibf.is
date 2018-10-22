import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames'
import styles from "./SectionLegend.module.scss";
import { Body2 } from "../Typography";

const SectionLegend = ({ number, text, textColor = "light" }) => (
  <div className={cn(styles.root, styles[textColor])}>
    <Body2 uppercase monospace>
      {number}
    </Body2>
    <span className={styles.decorator} />
    <Body2 uppercase bold>
      {text}
    </Body2>
  </div>
);

SectionLegend.propTypes = {
  textColor: PropTypes.oneOf(['light', 'dark']),
};

export default SectionLegend;
