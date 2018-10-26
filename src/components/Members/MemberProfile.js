import React from "react";
import styles from "./MemberProfile.module.scss";
import { Body2, Body4 } from "../Typography";

const MemberProfile = ({ name, title, email, image, themeColor }) => {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <div
          className={styles.imageInner}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.content}>
        <Body4 uppercase className={styles.title}>
          <span style={{ color: themeColor }}>{title}</span>
        </Body4>
        <Body2 bold className={styles.name}>{name}</Body2>
        <Body2 className={styles.email}>{email}</Body2>
      </div>
    </div>
  );
};

export default MemberProfile;
