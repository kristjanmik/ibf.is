import React from "react";
import styles from "./BlogContent.module.scss";
import { H2 } from "src/ui/components/Typography";
import Arrow from "src/ui/components/Arrow";

const BlogContent = ({ title, content, slices, previous, next, image }) => {
  const slice = slices[0];
  let Previous;
  let Next;

  if (previous) {
    Previous = (
      <a href={`/${previous.lang}/blog/${previous.uid}`}>
        <Arrow className={styles.arrowLeft} />
      </a>
    );
  }

  if (next) {
    Next = (
      <a href={`/${next.lang}/blog/${next.uid}`}>
        <Arrow className={styles.arrowRight} />
      </a>
    );
  }

  // backgroundImage: `url(https://images.prismic.io/rafmyntarad/240720a9-b817-4d4d-8e82-db11f36c2793_Promo+Episode+Cover.png?auto=compress,format)`,
  // backgroundImage: `url(https://images.prismic.io/rafmyntarad/b4e5db21-1473-425f-b7c3-8838be2c89c9_Fintech+Cluster.png?auto=compress,format&w=900h=400)`,
  // backgroundImage: `url(https://images.prismic.io/rafmyntarad/0f18a9b2-f46b-49a7-ba49-f76d588608e3_1_48AmBatwkM_tMUxWCvW2Og.jpeg?auto=compress,format)`,

  let Image = null;

  if (slice && slice.type === "podcast") {
    Image = (
      <div className={styles.blockImage}>
        <div className={styles.boxContent}>
          <img src={slice.data.image} width="100%" height="100%" />
        </div>
      </div>
    );
  } else if (image) {
    Image = (
      <div
        className={styles.rootImage}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    );
  }

  return (
    <>
      {Image}
      <div className={styles.root}>
        <H2 className={styles.title}>{title}</H2>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
        {slices.map(slice => slice.component)}

        <div className={styles.arrows}>
          <div>{Previous}</div>
          <div>{Next}</div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
