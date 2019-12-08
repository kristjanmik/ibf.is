import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./WorkingGroupCard.module.scss";
import { workingGroups } from "src/data/working-groups";
import Avatar from "../Avatar";
import WorkingGroupIcon from "./components/WorkingGroupIcon";
import { Body2, H2, H3 } from "src/ui/components/Typography";
import Arrow from "src/ui/components/Arrow";
import TranslationContext from "src/utility/TranslationContext";
import { withLang } from "src/utility/Translation";

const WorkingGroupCard = ({
  name,
  color,
  members,
  description,
  leader,
  url = "/",
}) => {
  const lang = useContext(TranslationContext);
  const T = withLang(lang);

  return (
    <Link className={styles.root} to={url}>
      <div className={styles.top}>
        <WorkingGroupIcon color={color} />
        <div className={styles.members}>
          {members.slice(0, 4).map(member => (
            <Avatar
              key={member.name}
              imageUrl={member.profile}
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
          {`${T("leadBy", leader)}`}
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
