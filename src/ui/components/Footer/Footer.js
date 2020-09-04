import React, { useContext } from "react";
import cn from "classnames";
import styles from "./Footer.module.scss";
import { H3, H4, Body3 } from "../Typography";
import { withLang } from "src/utility/Translation";
import TranslationContext from "src/utility/TranslationContext";

import facebookIcon from "src/images/social/facebook.svg";
import twitterIcon from "src/images/social/twitter.svg";
import telegramIcon from "src/images/social/telegram.svg";
import instagramIcon from "src/images/social/instagram.svg";
import youtubeIcon from "src/images/social/youtube.svg";

const socialMedia = [
  {
    name: "Facebook",
    url: "//facebook.ibf.is",
    icon: facebookIcon,
  },

  {
    name: "Twitter",
    url: "//twitter.ibf.is",
    icon: twitterIcon,
  },

  {
    name: "Instagram",
    url: "//instagram.ibf.is",
    icon: instagramIcon,
  },

  {
    name: "Telegram",
    url: "//telegram.ibf.is",
    icon: telegramIcon,
  },

  {
    name: "Youtube",
    url: "//youtube.ibf.is",
    icon: youtubeIcon,
  },
];

const currentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const Footer = () => {
  const lang = useContext(TranslationContext);
  const T = withLang(lang);

  const footer = {
    resources: [
      {
        title: T("register"),
        url: "https://old.ibf.is/register",
      },
      {
        title: T("bylaws"),
        url: "/is/page/bylaws",
      },
      {
        title: T("executiveSummary"),
        url: "/en-us/page/executive-summary",
      },
    ],

    learn: [
      {
        title: T("educationMaterial"),
        url: `${lang}/education`,
      },
      {
        title: T("whatIsCrypto"),
        url:
          "https://cointelegraph.com/bitcoin-for-beginners/what-are-cryptocurrencies",
      },
      {
        title: T("whatIsBlockchain"),
        url: "https://www.ibm.com/blockchain/what-is-blockchain",
      },
    ],
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.group}>
            <H3 bold className={styles.heading} bottom="xsmall">
              {T("resources")}
            </H3>
            <ul className={styles.list}>
              {footer.resources.map(link => (
                <li key={link.title}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.group}>
            <H3 bold className={styles.heading} bottom="xsmall">
              {T("learn")}
            </H3>
            <ul className={styles.list}>
              {footer.learn.map(link => (
                <li key={link.title}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.group}>
            <H3 bold className={styles.heading} bottom="xsmall">
              {T("contact")}
            </H3>
            <ul className={styles.list}>
              <li>
                <a href="mailto:ibf@ibf.is">ibf@ibf.is</a>
              </li>
              <li>{T("address")}</li>
              <li>105 Reykjavík</li>
              <li>
                <a href={`tel:${T("phone")}`}>{T("phone")}</a>
              </li>
            </ul>
          </div>
          <div className={cn(styles.group, styles.socialGroup)}>
            <H3 bold className={styles.heading} bottom="xsmall">
              {T("followUs")}
            </H3>
            <ul className={styles.socialList}>
              {socialMedia.map(social => (
                <li key={social.icon}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.url}
                    className={styles.socialIcon}
                  >
                    <img src={social.icon} alt={T("followUsOn", social.name)} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <H4>{T("donateFooter")}</H4>
      </div>
      <div className={styles.toes}>
        <Body3 className={styles.copyright}>
          © 2015 - {currentYear() || "present"} {T("foundationName")}
        </Body3>
      </div>
    </>
  );
};

export default Footer;
