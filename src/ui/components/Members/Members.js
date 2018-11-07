import React from "react";
import styles from "./Members.module.scss";
import MemberProfile from "./elements/MemberProfile";

const Members = ({ of: group }) => {

  if (!group || !group.members) {
    return null;
  }

  return (
    <div className={styles.root}>
      {group.members.map(member => (
        <MemberProfile
          key={member.name}
          name={member.name}
          title={member.title}
          image={member.image}
          email={member.email}
          themeColor={group.color}
        />
      ))}
    </div>
  );
};

export default Members;
