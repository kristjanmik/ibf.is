import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import Section from "src/ui/components/Section";
import EducationList from "src/ui/components/EducationList";
import { H1 } from "src/ui/components/Typography";
import TranslationContext from "src/utility/TranslationContext";
import { withLang } from "src/utility/Translation";

export const query = graphql`
  query EducationQuery($lang: String) {
    education: allPrismicEducation(
      filter: { lang: { eq: $lang } }
      sort: { fields: data___date, order: DESC }
    ) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            content {
              html
            }
            body {
              ... on PrismicEducationBodyYoutube {
                id
                primary {
                  url {
                    url
                  }
                }
                slice_type
              }
            }
            image {
              url
            }
          }
        }
      }
    }
  }
`;

const Education = ({ data, pageContext }) => {
  const { lang, uid } = pageContext;
  const T = withLang(lang);

  let education = data.education.edges.map(({ node }) => ({
    uid: node.uid,
    title: node.data.title.text,
    image: node.data.image.url,
    date: node.date,
  }));

  const title = `${T("education")} - ${T("foundationName")}`;

  return (
    <TranslationContext.Provider value={lang}>
      <Layout>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta
            property="og:url"
            content={`https://ibf.is/${lang}/education/${uid}`}
          />
        </Helmet>
        <Menu />

        <Section top="small" bottom="small">
          <H1 style={{ maxWidth: 1000 }}>{T("educationContent")}</H1>
          {lang === "en-us" && (
            <p>
              <i>
                <a href="/is/education">
                  More videos are available in Icelandic
                </a>
              </i>
            </p>
          )}
        </Section>
        <Section
          top="xlarge"
          bottom="xlarge"
          backgroundText={T("education")}
          backgroundTextFontSize="large"
          legendTextColor="dark"
        >
          <EducationList data={education} />
        </Section>
      </Layout>
    </TranslationContext.Provider>
  );
};
export default Education;
