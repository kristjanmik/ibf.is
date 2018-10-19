import React from "react";
import PropTypes from "prop-types";
import styles from "./ChapterLegend.module.scss";
import { Body2 } from "../Typography/";

const ChapterLegend = ({ number, text }) => (
  <div className={styles.root}>
    <Body2 bottom="xlarge">
      {number}
      ---
      {text}
    </Body2>
  </div>
);

ChapterLegend.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChapterLegend;
