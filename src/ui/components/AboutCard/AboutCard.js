import React from "react";
import styles from "./AboutCard.module.scss";
import { H2, styledDiv } from "../Typography";
import serveIcon from "src/images/icon_serve.svg";

const Icon = ({ icon, alt = "" }) => (
  <div className={styles.icon}>
    <img src={icon} alt={alt} />
  </div>
);

const AboutCard = ({ data = [] }) => {
  const Body2 = styledDiv("Body2");
  return (
    <aside className={styles.root}>
      {data.map(({ title, text }) => (
        <div key={title} className={styles.block}>
          <div className={styles.top}>
            <Icon icon={serveIcon} alt={title} />
            <H2 bold className={styles.heading}>
              {title}
            </H2>
          </div>
          <Body2 dangerouslySetInnerHTML={{ __html: text }}></Body2>
        </div>
      ))}
    </aside>
  );
};

export default AboutCard;
