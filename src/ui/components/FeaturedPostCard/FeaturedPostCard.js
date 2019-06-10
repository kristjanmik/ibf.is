import React from "react";
import styles from "./FeaturedPostCard.module.scss";
import DateCube from "src/ui/components/DateCube";
import { H2, Body3, Body4 } from "../Typography";
import Arrow from "../Arrow";

const FeaturedPostCard = ({
  color,
  date,
  fullWidth,
  imageUrl,
  text,
  title,
  subtitle,
  url,
}) => (
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
      {fullWidth && <DateCube date={date} color={color} />}
      <H2 bottom="small">{title}</H2>
      {fullWidth && (
        <Body4 bottom="small" className={styles.subtitle}>
          {subtitle}
        </Body4>
      )}
      <Body3 light>{text}</Body3>
      {fullWidth || <Arrow className={styles.arrow} top="medium" />}
    </a>
  </div>
);

export default FeaturedPostCard;
