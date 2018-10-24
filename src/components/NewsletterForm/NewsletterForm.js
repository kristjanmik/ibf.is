import React from "react";
import cn from 'classnames'
import styles from "./NewsletterForm.module.scss";
import { H2, Body3 } from "../Typography";
import { SubmitArrow } from './SubmitArrow';


const noop = () => {}

const NewsletterForm = ({ placeholder, onSubmit = noop, inHero }) => (
  <>
    <form onSubmit={onSubmit} className={cn(styles.root, inHero && styles.inHero)}>
      <div className={styles.inputWrap}>
        <input className={styles.input} placeholder={placeholder} />
      </div>
      <button className={styles.submit} type="submit">
        <H2 className={styles.submitText}>Join</H2>
        <SubmitArrow className={styles.submitArrow} />
      </button>
    </form>
    <Body3 className={styles.fineprint} light bottom="large">Monthly updates and news, never spam</Body3>
  </>
);

export default NewsletterForm;
