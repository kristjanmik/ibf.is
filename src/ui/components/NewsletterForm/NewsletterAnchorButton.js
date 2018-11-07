import React from "react";
import ScrollLink from "src/utility/components/ScrollLink";
import styles from './NewsletterAnchorButton.module.scss'
import { H2 } from "../Typography";
import { SubmitArrow } from './SubmitArrow';

export const NewsletterAnchorButton = () => (
  <ScrollLink to="#newsletter" className={styles.root}>
    <button className={styles.submit} type="submit">
      <H2 className={styles.submitText}>Join our newsletter</H2>
      <SubmitArrow className={styles.submitArrow} />
    </button>
  </ScrollLink>
);

export default NewsletterAnchorButton;
