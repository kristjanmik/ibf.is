import React from "react";
import PropTypes from "prop-types";
import styles from "./NewsletterSection.module.scss";
import { H1 } from "../../components/Typography";
import NewsletterForm from "../../components/NewsletterForm";

const NewsletterSection = ({}) => (
  <div className={styles.root}>
    <div className={styles.heading}>
      <H1>
        Join our <strong>newsletter</strong> <br />
        for monthly updates <br /> and news
      </H1>
    </div>
    <div className={styles.form}>
      <NewsletterForm placeholder="Enter your email here" tempStyle />
    </div>
  </div>
);

NewsletterSection.propTypes = {};

export default NewsletterSection;
