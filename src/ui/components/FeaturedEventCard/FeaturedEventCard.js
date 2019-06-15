import React from "react";
import styles from "./FeaturedEventCard.module.scss";
import DateCube from "src/ui/components/DateCube";
import { H2, Body3, Body4 } from "../Typography";

const FeaturedEventCard = ({
  color,
  date,
  imageUrl,
  text,
  title,
  subtitle,
  url,
}) => (
  <div className={`${styles.root}`}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <a
      href={url}
      target="blank"
      rel="noopener wnoreferrer"
      className={styles.card}
    >
      <DateCube date={date} color={color} />
      <H2 bottom="small">{title}</H2>
      <Body4 bottom="small" className={styles.subtitle}>
        {subtitle}
      </Body4>

      <Body3 light>{text}</Body3>
    </a>
  </div>
);

export default FeaturedEventCard;
