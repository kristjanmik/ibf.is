import React from "react";
import styles from "./StaticContent.module.scss";
import { H2 } from "src/ui/components/Typography";

const StaticContent = ({ title, content }) => {
  return (
    <>
      <div className={styles.root}>
        <H2 className={styles.title}>{title}</H2>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </>
  );
};

export default StaticContent;
