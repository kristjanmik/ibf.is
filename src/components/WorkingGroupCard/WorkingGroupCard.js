import React from "react";
import PropTypes from "prop-types";
import styles from "./WorkingGroupCard.module.scss";
import { workingGroups } from "../../data/working-groups";
import Avatar from '../Avatar'
import { WorkingGroupIcon } from './WorkingGroupIcon'
import { Body2, H2, H3 } from '../Typography'

const WorkingGroupCard = ({ name, color, members, description, leader }) => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <WorkingGroupIcon color={color} />
        <div className={styles.members}>
          {members.map(member => <Avatar key={member.name} imageUrl={member.image} altText={member.name}/> )}
        </div>
      </div>
      <div className={styles.content}>
        <H2 bold className={styles.title}>{name}</H2>
        <H3 bottom="xsmall" className={styles.subtitle}>Lead by {leader}</H3>
        <Body2>{description}</Body2>
      </div>
    </div>
  );
};

WorkingGroupCard.propTypes = {
  workingGroup: PropTypes.oneOf(workingGroups),
};

export default WorkingGroupCard;
