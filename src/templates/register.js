import React, { useState } from "react";
import Helmet from "react-helmet";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import Section from "src/ui/components/Section";
import RegistrationCard from "src/ui/components/RegistrationCard";
import Button from "src/ui/components/Button";
import RegistrationSection from "src/ui/sections/RegistrationSection";
import BenefitsSection from "src/ui/sections/BenefitsSection";
import DonationsSection from "src/ui/sections/DonationsSection";
import TranslationContext from "src/utility/TranslationContext";

import { withLang } from "src/utility/Translation";

const RegisterTemplate = ({ data, pageContext }) => {
  const [registrationActive, setRegistrationActive] = useState(false);
  const { lang } = pageContext;

  const T = withLang(lang);

  const title = `Become a member - ${T("foundationName")}`;
  const description = "Become a member";
  const image = null;

  return (
    <TranslationContext.Provider value={lang}>
      <Layout>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta name="description" content={description} />
          {image && <meta name="twitter:image:alt" content={title} />}
          {image && <meta property="og:image" content={image} />}
          {image && <meta name="image" content={image} />}
          <meta property="og:url" content={`https://ibf.is/${lang}/register`} />
        </Helmet>
        <Menu />
        <>
          {registrationActive && (
            <Section top="xsmall" bottom="xsmall">
              <RegistrationCard
                onClose={() => setRegistrationActive(!registrationActive)}
              />
            </Section>
          )}
          {!registrationActive && (
            <Section
              bottom="xsmall"
              number="01"
              legendText={T("becomeMember")}
              legendTextColor="dark"
            >
              <RegistrationSection />
              <Button
                size="small"
                onClick={() => setRegistrationActive(!registrationActive)}
                style={{ marginTop: "80px" }}
              >
                {T("registerNow")}
              </Button>
            </Section>
          )}
          <Section
            bottom="xsmall"
            number="02"
            legendText={T("benefitsLegend")}
            legendTextColor="dark"
            backgroundText={T("benefitsBackground")}
          >
            <BenefitsSection />
          </Section>
          <Section
            top="xsmall"
            bottom="xsmall"
            number="03"
            legendText={T("donations")}
            legendTextColor="dark"
            backgroundText={T("donate")}
          >
            <DonationsSection />
          </Section>
        </>
      </Layout>
    </TranslationContext.Provider>
  );
};
export default RegisterTemplate;
