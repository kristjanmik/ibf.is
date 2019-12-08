import React, { useContext } from "react";
import styles from "./NewsletterSection.module.scss";
import { H1 } from "src/ui/components/Typography";
import NewsletterForm from "src/ui/components/NewsletterForm";
import TranslationContext from "src/utility/TranslationContext";
import { withLang } from "src/utility/Translation";

const NewsletterSection = () => {
  const lang = useContext(TranslationContext);
  const T = withLang(lang);

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <H1 bottom="large">
          <div dangerouslySetInnerHTML={{ __html: T("newsletterCTA") }} />
        </H1>
      </div>
      <div className={styles.form}>
        <NewsletterForm placeholder={T("enterEmail")} alternative lang={lang} />
      </div>
    </div>
  );
};

export default NewsletterSection;
