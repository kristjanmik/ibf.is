import React from "react";
import ScrollLink from "src/ui/components/ScrollLink";
import { H2 } from "src/ui/components/Typography";
import SubmitArrow from "src/ui/components/SubmitArrow";
import styles from "./NewsletterAnchorButton.module.scss";

export const NewsletterAnchorButton = () => (
  <ScrollLink to="#newsletter" className={styles.root}>
    <button className={styles.submit} type="submit">
      <H2 className={styles.submitText}>Join our newsletter</H2>
      <SubmitArrow className={styles.submitArrow} />
    </button>
  </ScrollLink>
);

export default NewsletterAnchorButton;
