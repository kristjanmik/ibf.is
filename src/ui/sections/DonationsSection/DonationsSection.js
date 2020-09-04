import React, { useContext } from "react";
import styles from "./DonationsSection.module.scss";
import { H1, H2, Body2, Body3 } from "src/ui/components/Typography";
import QRCode from "qrcode.react";
import TranslationContext from "src/utility/TranslationContext";
import { withLang } from "src/utility/Translation";

const DonationsSection = () => {
  const lang = useContext(TranslationContext);
  const T = withLang(lang);

  const BTC = "1HN7dLXP9y3Jyn2emS6Jt9M86ecFPaj9hs";
  const AUR = "AKni7x9GJeJ6coiCY7Hh658MrH7vHCxVS7";

  return (
    <>
      <H1
        dangerouslySetInnerHTML={{
          __html: T("weAppreciateDonations"),
        }}
      />
      <div className={styles.container}>
        <div className={styles.description}>
          <Body2
            dangerouslySetInnerHTML={{
              __html: T("weAppreciateDonationsDescription"),
            }}
          ></Body2>
        </div>
        <div className={styles.donate}>
          <H2>{T("transferBTC")}</H2>
          <div className={styles.qrContainer}>
            <QRCode value={`bitcoin:${BTC}`} />
            <Body3>{BTC}</Body3>
          </div>
          <H2>{T("transferAUR")}</H2>
          <div className={styles.qrContainer}>
            <QRCode value={`auroracoin:${AUR}`} />
            <Body3>{AUR}</Body3>
          </div>
          <H2>{T("bankWire")}</H2>
          <Body3>
            <span>{T("bankAccount")}:</span> 0133-26-440515
          </Body3>
          <Body3>
            <span>{T("ssnAccount")}:</span> 440515-1340
          </Body3>
        </div>
      </div>
    </>
  );
};

export default DonationsSection;
