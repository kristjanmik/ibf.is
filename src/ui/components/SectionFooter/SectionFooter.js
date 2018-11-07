import React from "react";
import cn from 'classnames'
import styles from "./SectionFooter.module.scss";
import Arrow from "../Arrow";
import { Body3 } from "../Typography";

const SectionFooter = ({ text, url = '/', textColor = "light" }) => (
  <div className={cn(styles.root, styles[textColor])}>
    <a href={url} className={styles.url}>
      <Body3 className={styles.text}>{text}</Body3>
      <Arrow rotation="90" color={textColor === 'light' ? '#FFF' : '#00468A'} />
    </a>
  </div>
);

export default SectionFooter;
