import React, { useContext } from "react";
import styles from "./RegistrationCard.module.scss";
import { styledDiv } from "../Typography";
import Section from "src/ui/components/Section";
import RegistrationForm from "src/ui/components/RegistrationForm";
import TranslationContext from "src/utility/TranslationContext";
import { withLang } from "src/utility/Translation";

const RegistrationCard = ({ data = [], children, onClose }) => {
  const lang = useContext(TranslationContext);
  const T = withLang(lang);

  const Body2 = styledDiv("Body2");
  return (
    <aside className={styles.root}>
      <Section
        top="xsmall"
        bottom="xsmall"
        number="01"
        legendText={T("becomeMember")}
        legendTextColor="dark"
      >
        <RegistrationForm onClose={onClose} />
      </Section>
    </aside>
  );
};

export default RegistrationCard;
