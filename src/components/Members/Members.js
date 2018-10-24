import React from "react";
import { workingGroups } from "../../data/working-groups";
import styles from "./Members.module.scss";

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
        <img key={member.name} alt={`Board member ${member.name}`} src={member.image} />
      ))}
    </div>
  );
};

export default Members;
