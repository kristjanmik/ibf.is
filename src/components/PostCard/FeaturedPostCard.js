import React from "react";
import PropTypes from "prop-types";
import styles from "./FeaturedPostCard.module.scss";
import { H2, Body3 } from "../Typography";
import Arrow from "../Arrow";

const FeaturedPostCard = ({ title, text, imageUrl, url }) => (
  <div className={styles.root}>
    <div className={styles.card}>
      <H2 bottom="small">{title}</H2>
      <Body3 light>{text}</Body3>
      <Arrow top="medium" />
    </div>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  </div>
);

FeaturedPostCard.propTypes = {};

export default FeaturedPostCard;
