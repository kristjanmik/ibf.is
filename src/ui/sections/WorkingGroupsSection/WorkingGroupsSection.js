import React, { useContext } from "react";
import styles from "./WorkingGroupsSection.module.scss";
import WorkingGroupCard from "src/ui/components/WorkingGroupCard";
import TranslationContext from "src/utility/TranslationContext";

const WorkingGroupsSection = ({ groups }) => {
  const lang = useContext(TranslationContext);

  if (!groups || !groups.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      {groups.map(group => (
        <WorkingGroupCard
          key={group.name}
          name={group.name}
          color={group.color}
          members={group.members}
          description={group.description}
          leader={group.members[0].name}
          url={`${lang}/working-group/${group.uid}`}
        />
      ))}
    </div>
  );
};

export default WorkingGroupsSection;
