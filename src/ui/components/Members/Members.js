import React from "react";
import styles from "./Members.module.scss";
import MemberProfile from "./components/MemberProfile";

const Members = ({ of: group, members, color }) => {
  //@TODO Old implementation to remove after rewrite
  if (group && group.members) {
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
  }

  return (
    <div className={styles.root}>
      {members.map(member => (
        <MemberProfile
          key={member.name}
          name={member.name}
          title={member.title}
          image={member.profile}
          email={member.email}
          themeColor={color}
        />
      ))}
    </div>
  );
};

export default Members;
