import React from "react";
import styles from "./FeaturedPostCard.module.scss";
import { H2, Body3 } from "../Typography";
import Arrow from "../Arrow";

const FeaturedPostCard = ({ title, text, imageUrl, url }) => (
  <a href={url} target="_blank" className={styles.root}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className={styles.card}>
      <H2 bottom="small">{title}</H2>
      <Body3 light>{text}</Body3>
      <Arrow className={styles.arrow} top="medium" />
    </div>
  </a>
);

export default FeaturedPostCard;
