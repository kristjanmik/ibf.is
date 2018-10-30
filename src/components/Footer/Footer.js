import React from "react";
import cn from 'classnames'
import styles from "./Footer.module.scss";
import { H3, Body3 } from "../Typography";

import facebookIcon from "../../images/social/facebook.svg";
import twitterIcon from "../../images/social/twitter.svg";
import telegramIcon from "../../images/social/telegram.svg";
import instagramIcon from "../../images/social/instagram.svg";
import youtubeIcon from "../../images/social/youtube.svg";


const footer = {
  resources: [
    {
      title: "Bylaws",
      url: "https://secure-storage.ibf.is/Bylaws.pdf",
    },
    {
      title: "Executive Summary",
      url: "https://secure-storage.ibf.is/Executive%20Summary.pdf",
    },
  ],
  //@TODO Enable when content is ready
  // resources: [
  //   {
  //     title: "Legality of Bitcoin in Iceland",
  //     url: "/",
  //   },
  //   {
  //     title: "Iceland in the news",
  //     url: "/",
  //   },
  //   {
  //     title: "Join a working group",
  //     url: "/",
  //   },
  // ],
  learn: [
    // {
    //   title: "Getting started",
    //   url: "/",
    // },
    {
      title: "What is Cryptocurrency?",
      url: "https://cointelegraph.com/bitcoin-for-beginners/what-are-cryptocurrencies",
    },
    {
      title: "What is Blockchain?",
      url: "https://www.ibm.com/blockchain/what-is-blockchain",
    },
  ],
};

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
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
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
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.group}>
        <H3 bold className={styles.heading} bottom="xsmall">
          Contact
        </H3>
        <ul className={styles.list}>
          <li><a href="mailto:ibf@ibf.is">ibf@ibf.is</a></li>
          <li>Engjateigur 3</li>
          <li>105 Reykjavík</li>
        </ul>
      </div>
      <div className={cn(styles.group, styles.socialGroup)}>
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
      <Body3>© 2015 - {currentYear() || "present"} Icelandic Blockchain Foundation</Body3>
    </div>
  </>
);

export default Footer;
