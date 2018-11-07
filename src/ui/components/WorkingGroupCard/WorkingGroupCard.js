import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./WorkingGroupCard.module.scss";
import { workingGroups } from "src/data/working-groups";
import Avatar from "../Avatar";
import WorkingGroupIcon from "./subcomponents/WorkingGroupIcon";
import { Body2, H2, H3 } from "src/ui/components/Typography";
import Arrow from 'src/ui/components/Arrow';

const WorkingGroupCard = ({
  name,
  color,
  members,
  description,
  leader,
  url = "/",
}) => {
  return (
    <Link className={styles.root} to={url}>
      <div className={styles.top}>
        <WorkingGroupIcon color={color} />
        <div className={styles.members}>
          {members.slice(0, 4).map(member => (
            <Avatar
              key={member.name}
              imageUrl={member.image}
              altText={member.name}
            />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <H2 bold className={styles.title}>
          {name}
        </H2>
        <H3 bottom="xsmall" className={styles.subtitle}>
          Lead by {leader}
        </H3>
        <Body2 bottom="xsmall">{description}</Body2>
        <Arrow className={styles.arrow} />
      </div>
    </Link>
  );
};

WorkingGroupCard.propTypes = {
  workingGroup: PropTypes.oneOf(workingGroups),
};

export default WorkingGroupCard;
