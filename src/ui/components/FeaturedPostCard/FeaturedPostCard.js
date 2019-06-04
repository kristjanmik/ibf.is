import React from "react";
import styles from "./FeaturedPostCard.module.scss";
import DateCube from "src/ui/components/DateCube";
import { H2, Body3 } from "../Typography";
import Arrow from "../Arrow";

const FeaturedPostCard = ({ date, title, text, imageUrl, url, fullWidth }) => (
  <div className={`${styles.root} ${fullWidth ? styles.fullWidth : ""}`}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <a
      href={url}
      target="blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      {/* TODO: replace hardcoded values */}
      {console.log(date)}
      <DateCube date={"13 may"} color={"red"} />
      <H2 bottom="small">{title}</H2>
      <Body3 light>{text}</Body3>
      <Arrow className={styles.arrow} top="medium" />
    </a>
  </div>
);

export default FeaturedPostCard;
