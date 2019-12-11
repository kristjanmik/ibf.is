import React from "react";
import styles from "./BlogContent.module.scss";
import { H2, H4 } from "src/ui/components/Typography";
import Arrow from "src/ui/components/Arrow";
import AuthorCard from "src/ui/components/AuthorCard";

const BlogContent = ({
  title,
  date,
  content,
  slices,
  previous,
  next,
  image,
  author,
}) => {
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

  let Image = null;

  if (slice && slice.type === "podcast") {
    Image = (
      <div className={styles.blockImage}>
        <div className={styles.boxContent}>
          <img src={slice.data.image} width="100%" height="100%" alt={title} />
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
        <H2>{title}</H2>
        <H4 light className={styles.date}>
          {date}
        </H4>
        {author && <AuthorCard {...author} />}
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
