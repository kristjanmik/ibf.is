import React from "react";
import PropTypes from "prop-types";
import styles from "./WorkingGroups.module.scss";
import WorkingGroupCard from "../WorkingGroupCard";

const WorkingGroups = ({ groups }) => {
  if (!groups || !groups.length) {
    return null;
  }
  return (
    <div className={styles.root}>
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

WorkingGroups.propTypes = {};

export default WorkingGroups;
