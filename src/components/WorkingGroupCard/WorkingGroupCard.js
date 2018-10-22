import React from "react";
import PropTypes from "prop-types";
import styles from "./WorkingGroupCard.module.scss";
import { availableWorkingGroups } from "../../data/working-groups";
import Avatar from '../Avatar'
import { WorkingGroupIcon } from './WorkingGroupIcon'
import { Body1, H2, H3 } from '../Typography'

const WorkingGroupCard = ({ workingGroupName }) => {
  const group = availableWorkingGroups.find(
    group => group.name === workingGroupName
  );

  if (!group) return null;

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <WorkingGroupIcon color={group.color} />
        <div className={styles.members}>
          {group.members.map(member => <Avatar key={member.name} imageUrl={member.image} altText={member.name}/> )}
        </div>
      </div>
      <div className={styles.content}>
        <H2 bold className={styles.title}>{group.name}</H2>
        <H3 bottom="xsmall" className={styles.subtitle}>Lead by {group.leader}</H3>
        <Body1>{group.description}</Body1>
      </div>
    </div>
  );
};

WorkingGroupCard.propTypes = {
  workingGroup: PropTypes.oneOf(availableWorkingGroups),
};

export default WorkingGroupCard;
