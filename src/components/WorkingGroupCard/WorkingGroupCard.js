import React from "react";
import PropTypes from "prop-types";
import styles from "./WorkingGroupCard.module.scss";
import { availableWorkingGroups } from "../../data/working-groups";
import Avatar from '../Avatar'

const WorkingGroupCard = ({ workingGroupName }) => {
  const group = availableWorkingGroups.find(
    group => group.name === workingGroupName
  );

  if (!group) return null;

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        {group.members.map(member => <Avatar key={member.name} imageUrl={member.image} altText={member.name}/> )}
      </div>
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
