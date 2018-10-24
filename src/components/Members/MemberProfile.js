import React from "react";
import styles from "./MemberProfile.module.scss";
import { Body1 } from "../Typography";

const MemberProfile = ({ name, title, email, image }) => {
  return (
    <div className={styles.root}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.content}>
        <Body1>{title}</Body1>
        <Body1>{name}</Body1>
        <Body1>{email}</Body1>
      </div>
    </div>
  );
};

export default MemberProfile;
