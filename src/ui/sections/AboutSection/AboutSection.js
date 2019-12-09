import React from "react";
import styles from "./AboutSection.module.scss";
import AboutCard from "src/ui/components/AboutCard";
import Arrow from "src/ui/components/Arrow";
import { H1, styledDiv } from "src/ui/components/Typography";

const AboutSection = ({
  title,
  subtitle,
  text,
  statements,
  data: { main, aside, imageUrl } = {},
}) => {
  const Body1 = styledDiv("Body1");

  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <H1 bottom="large">
          <strong>{title}</strong>
          {subtitle && (
            <span>
              <br />
              {subtitle}
            </span>
          )}
        </H1>
        <Body1 dangerouslySetInnerHTML={{ __html: text }} />
        <Arrow alignment="vertical" className={styles.arrow} />
      </div>
      {statements ? (
        <AboutCard data={statements} />
      ) : (
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      )}
    </div>
  );
};

export default AboutSection;
