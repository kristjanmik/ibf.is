import React from "react";
import cn from 'classnames'
import styles from "./WorkingGroups.module.scss";
import WorkingGroupCard from "../WorkingGroupCard";
import padding from '../../utils/padding';

const WorkingGroups = ({ groups }) => {
  if (!groups || !groups.length) {
    return null;
  }
  return (
    <div className={cn(styles.root, padding(null, "xlarge"))}>
      {groups.map(group => (
        <div className={styles.card} key={group.name}>
          <WorkingGroupCard
            name={group.name}
            color={group.color}
            members={group.members}
            description={group.description}
            leader={group.leader}
          />
        </div>
      ))}
    </div>
  );
};

export default WorkingGroups;
