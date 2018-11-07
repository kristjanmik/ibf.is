import React from "react";
import styles from "./AboutCard.module.scss";
import { H2, Body2 } from "../Typography";
import serveIcon from "src/images/icon_serve.svg";
import educateIcon from "src/images/icon_educate.svg";
import advocateIcon from "src/images/icon_advocate.svg";

const Icon = ({ icon }) => (
  <div className={styles.icon}>
    <img src={icon} />
  </div>
);

const AboutCard = ({ data = [] }) => (
  <aside className={styles.root}>
    {data.map(block => (
      <div key={block.title} className={styles.block}>
        <div className={styles.top}>
          <Icon icon={serveIcon} />
          <H2 bold className={styles.heading}>
            {block.title}
          </H2>
        </div>
        <Body2>{block.text}</Body2>
      </div>
    ))}
  </aside>
);

export default AboutCard;
