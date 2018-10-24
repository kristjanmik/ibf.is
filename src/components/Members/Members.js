import React from "react";
import { workingGroups } from "../../data/working-groups";
import styles from "./Members.module.scss";
import MemberProfile from "./MemberProfile";

const Members = ({ of }) => {
  const group = workingGroups.find(
    group => group.name && group.name.toLowerCase() === of.toLowerCase()
  );

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
        />
      ))}
    </div>
  );
};

export default Members;
