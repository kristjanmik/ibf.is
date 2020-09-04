import React, { useContext } from "react";
import styles from "./RegistrationSection.module.scss";
import { H1, Body2 } from "src/ui/components/Typography";

import TranslationContext from "src/utility/TranslationContext";
import { withLang } from "src/utility/Translation";

const RegistrationSection = () => {
  const lang = useContext(TranslationContext);
  const T = withLang(lang);

  return (
    <>
      <img
        className={styles.img}
        src={require("src/images/registration.png")}
      />

      <div className={styles.container}>
        <H1
          dangerouslySetInnerHTML={{
            __html: T("registrationCount", 14),
          }}
        />
        <div className={styles.fee}>
          <Body2>{T("registrationFee")}</Body2>
        </div>
      </div>
    </>
  );
};

export default RegistrationSection;
