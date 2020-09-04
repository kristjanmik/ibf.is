import React, { useContext } from "react";
import styles from "./BenefitsSection.module.scss";
import { H1 } from "src/ui/components/Typography";
import BenefitBox from "src/ui/components/BenefitBox";
import TranslationContext from "src/utility/TranslationContext";
import { withLang } from "src/utility/Translation";

const BenefitsSection = () => {
  const lang = useContext(TranslationContext);
  const T = withLang(lang);

  return (
    <>
      <H1 bottom="large">{T("benefitsOfMembership")}</H1>
      <div className={styles.container}>
        <BenefitBox
          title={T("influenceOurWork")}
          description={T("influenceOurWorkDescription")}
        />
        <BenefitBox
          title={T("supportMeaningfulWork")}
          description={T("supportMeaningfulWorkDescription")}
        />
        <BenefitBox
          title={T("campaignTheBoard")}
          description={T("campaignTheBoardDescription")}
        />

        <BenefitBox
          title={T("expandSupportNetwork")}
          description={T("expandSupportNetworkDescription")}
        />
        <BenefitBox
          title={T("attendPrivateEvents")}
          description={T("attendPrivateEventsDescription")}
        />
        <BenefitBox
          title={T("supportYourProject")}
          description={T("supportYourProjectDescription")}
        />
      </div>
    </>
  );
};

export default BenefitsSection;
