import React from "react";
import styles from "./Footer.module.scss";
import { H3 } from "../Typography";

import facebookIcon from "../../images/social/facebook.svg";
import twitterIcon from "../../images/social/twitter.svg";
import telegramIcon from "../../images/social/telegram.svg";
import instagramIcon from "../../images/social/instagram.svg";
import youtubeIcon from "../../images/social/youtube.svg";

const footer = {
  resources: [
    {
      title: "Legality of Bitcoin in Iceland",
      url: "/",
    },
    {
      title: "Iceland in the news",
      url: "/",
    },
    {
      title: "Join a working group",
      url: "/",
    },
  ],
  learn: [
    {
      title: "Getting started",
      url: "/",
    },
    {
      title: "What is Cryptocurrency?",
      url: "/",
    },
    {
      title: "What is Blockchain?",
      url: "/",
    },
  ],
};

const socialMedia = [
  {
    name: "Facebook",
    url: "//facebook.com/ibf",
    icon: facebookIcon,
  },

  {
    name: "Twitter",
    url: "//facebook.com/ibf",
    icon: twitterIcon,
  },

  {
    name: "Instagram",
    url: "//facebook.com/ibf",
    icon: instagramIcon,
  },

  {
    name: "Telegram",
    url: "//facebook.com/ibf",
    icon: telegramIcon,
  },

  {
    name: "Youtube",
    url: "//facebook.com/ibf",
    icon: youtubeIcon,
  },
];

const currentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const Footer = () => (
  <>
    <div className={styles.root}>
      <div className={styles.group}>
        <H3 bold className={styles.heading} bottom="xsmall">
          Resources
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
          Learn
        </H3>
        <ul className={styles.list}>
          {footer.learn.map(link => (
            <li key={link.title}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.group}>
        <H3 bold className={styles.heading} bottom="xsmall">
          Contact
        </H3>
        <ul className={styles.list}>
          <li>ibf@ibf.is</li>
          <li>Engjateigur 3</li>
          <li>105 Reykjavík</li>
        </ul>
      </div>
      <div className={styles.group}>
        <H3 bold className={styles.heading} bottom="xsmall">
          Follow us
        </H3>
        <ul className={styles.socialList}>
          {socialMedia.map(social => (
            <li key={social.icon}>
              <a target="_blank" href={social.url} className={styles.socialIcon}>
                <img src={social.icon} alt={`Follow us on ${social.name}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className={styles.toes}>
      © 2015 - {currentYear() || "present"} Icelandic Blockchain Foundation
    </div>
  </>
);

export default Footer;
