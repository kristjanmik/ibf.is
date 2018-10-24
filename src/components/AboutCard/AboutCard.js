import React from "react";
import PropTypes from "prop-types";
import styles from "./AboutCard.module.scss";
import { H2, Body2 } from "../Typography";
import serveIcon from "../../images/icon_serve.svg";
import educateIcon from "../../images/icon_educate.svg";
import advocateIcon from "../../images/icon_advocate.svg";

const Icon = ({ icon }) => (
  <div className={styles.icon}>
    <img src={icon} />
  </div>
);

const AboutCard = () => (
  <aside className={styles.root}>
    <div className={styles.block}>
      <div className={styles.top}>
        <Icon icon={serveIcon} />
        <H2 bold className={styles.heading}>
          Serve
        </H2>
      </div>
      <Body2>
        The Foundation serves as a self-governed council for cryptocurrencies
        and blockchain entities in Iceland
      </Body2>
    </div>
    <div className={styles.block}>
      <div className={styles.top}>
        <Icon icon={educateIcon} />
        <H2 bold className={styles.heading}>
          Educate
        </H2>
      </div>
      <Body2>
        The Foundation educates the public, industry, and government on the
        benefits of the cryptocurrency and blockchain technology. We organize
        outreach and marketing efforts, support and promote Icelandic companies
        and attract foreign companies and talent to come to Iceland.
      </Body2>
    </div>
    <div className={styles.block}>
      <div className={styles.top}>
        <Icon icon={advocateIcon} />
        <H2 bold className={styles.heading}>
          Advocate
        </H2>
      </div>
      <Body2>
        We advocate for parliament and government agencies to pass fair and
        clear laws on cryptocurrencies and blockchain technology, as a means of
        attracting consumers, businesses, and industry to Iceland.
      </Body2>
    </div>
  </aside>
);

AboutCard.propTypes = {};

export default AboutCard;
