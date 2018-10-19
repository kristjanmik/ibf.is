import React from "react";
import PropTypes from "prop-types";
import styles from "./WorkingGroupCard.module.scss";
import { availableWorkingGroups } from "../../data";

const WorkingGroupCard = ({ workingGroup }) => {
  const group = availableWorkingGroups[workingGroup];

  if (!group) return;

  return (
    <div className={styles.root}>
      <div className={styles.top}>logo, members</div>
      <div className={styles.content}>
        <h1>{group.name}</h1>
        <p>Lead by {group.leader}</p>
        <p>{group.description}</p>
      </div>
    </div>
  );
};

WorkingGroupCard.propTypes = {
  workingGroup: PropTypes.oneOf(availableWorkingGroups),
};

export default WorkingGroupCard;
