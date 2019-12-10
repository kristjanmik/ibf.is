import React from "react";
import styles from "./PostCard.module.scss";
import { H2, Body3 } from "../Typography";
import Arrow from "../Arrow";

const PostCard = ({ title, text, url }) => (
  <a
    href={url}
    target={url[0] !== "/" ? "blank" : undefined}
    rel={url[0] !== "/" ? "noopener noreferrer" : undefined}
    className={styles.root}
  >
    <H2 bottom="small">{title}</H2>
    <Body3 bottom="small" light>
      {text}
    </Body3>
    <Arrow className={styles.arrow} />
  </a>
);

export default PostCard;
