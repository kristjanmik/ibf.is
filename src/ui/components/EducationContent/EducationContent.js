import React from "react";
import { H2 } from "src/ui/components/Typography";
// import { withLang } from "src/utility/Translation";
// import TranslationContext from "src/utility/TranslationContext";

import styles from "./EducationContent.module.scss";

const EducationContent = ({ image, title, content, youtube, podcast }) => {
  // const lang = useContext(TranslationContext);
  // const T = withLang(lang);
  return (
    <>
      {youtube && (
        <div className={styles.video}>
          <div className={styles.boxContent}>
            <iframe
              width="100%"
              src={youtube.url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ height: "100%" }}
              title={title}
            ></iframe>
          </div>
        </div>
      )}
      {!youtube && !podcast && (
        <div className={styles.blockImage}>
          <div className={styles.boxContent}>
            <img src={image} width="100%" height="100%" alt={title} />
          </div>
        </div>
      )}
      {podcast && (
        <div key={`podcast`} className={styles.podcast}>
          <div
            dangerouslySetInnerHTML={{
              __html: podcast,
            }}
            style={{
              marginTop: "8px",
              marginBottom: "32px",
            }}
          />
        </div>
      )}
      <div className={styles.root}>
        <H2>{title}</H2>

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

export default EducationContent;
