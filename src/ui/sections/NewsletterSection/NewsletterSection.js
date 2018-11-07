import React from "react";
import styles from "./NewsletterSection.module.scss";
import { H1 } from "src/ui/components/Typography";
import NewsletterForm from "src/ui/components/NewsletterForm";

const NewsletterSection = () => (
  <div className={styles.root}>
    <div className={styles.heading}>
      <H1 bottom="large">
        Join our <strong>newsletter</strong> <br />
        for monthly updates <br /> and news
      </H1>
    </div>
    <div className={styles.form}>
      <NewsletterForm placeholder="Enter your email here" alternative />
    </div>
  </div>
);

export default NewsletterSection;
