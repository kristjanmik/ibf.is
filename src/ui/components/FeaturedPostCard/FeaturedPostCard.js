import React from "react";
import styles from "./FeaturedPostCard.module.scss";
import { H2, Body3 } from "../Typography";
import Arrow from "../Arrow";

const FeaturedPostCard = ({ imageUrl, text, title, url }) => (
  <div className={`${styles.root}`}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <a
      href={url}
      target={url[0] !== "/" ? "blank" : undefined}
      rel={url[0] !== "/" ? "noopener noreferrer" : undefined}
      className={styles.card}
    >
      <H2 bottom="small">{title}</H2>
      <Body3 light>{text}</Body3>
      <Arrow className={styles.arrow} top="medium" />
    </a>
  </div>
);

export default FeaturedPostCard;
