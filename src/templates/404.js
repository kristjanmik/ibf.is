import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import Section from "src/ui/components/Section";
import TranslationContext from "src/utility/TranslationContext";
import Helmet from "react-helmet";
import { withLang } from "src/utility/Translation";

const NotFoundPage = ({ pageContext: { lang } }) => {
  const T = withLang(lang);

  return (
    <TranslationContext.Provider value={lang}>
      <Layout>
        <Helmet>
          <title>
            {T("pageNotFound")} - {T("foundationName")}
          </title>
        </Helmet>
        <Menu />

        <Section
          top="xlarge"
          bottom="xlarge"
          id="about"
          number="02"
          legendText={T("aboutHeading")}
          legendColor="dark"
        >
          <h1>{T("notFoundHeading")}</h1>
          <p>{T("notFoundBody")}</p>
        </Section>
      </Layout>
    </TranslationContext.Provider>
  );
};

export default NotFoundPage;
