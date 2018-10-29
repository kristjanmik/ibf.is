import React from "react";
import styles from "./PostCard.module.scss";
import { H2, Body3 } from "../Typography";
import Arrow from '../Arrow';

const PostCard = ({ title, text, url }) => (
  <a href={url} target="_blank" className={styles.root}>
    <H2 bottom="small">{title}</H2>
    <Body3 light>{text}</Body3>
    <Arrow className={styles.arrow} />
  </a>
);

export default PostCard;
