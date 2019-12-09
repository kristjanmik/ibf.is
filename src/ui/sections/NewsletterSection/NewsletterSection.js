import React, { useContext } from "react";
import styles from "./NewsletterSection.module.scss";
import { styledDiv } from "src/ui/components/Typography";
import NewsletterForm from "src/ui/components/NewsletterForm";
import TranslationContext from "src/utility/TranslationContext";
import { withLang } from "src/utility/Translation";

const NewsletterSection = () => {
  const lang = useContext(TranslationContext);
  const T = withLang(lang);

  const H1 = styledDiv("H1");

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <H1
          bottom="large"
          dangerouslySetInnerHTML={{
            __html: T("newsletterCTA"),
          }}
        />
      </div>
      <div className={styles.form}>
        <NewsletterForm placeholder={T("enterEmail")} alternative lang={lang} />
      </div>
    </div>
  );
};

export default NewsletterSection;
