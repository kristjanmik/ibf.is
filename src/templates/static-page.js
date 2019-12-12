import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import Section from "src/ui/components/Section";
import StaticContent from "src/ui/components/StaticContent";
import TranslationContext from "src/utility/TranslationContext";

export const query = graphql`
  query StaticPageQuery($lang: String!, $uid: String!) {
    pages: allPrismicStaticPage(
      filter: { lang: { eq: $lang }, uid: { eq: $uid } }
    ) {
      edges {
        node {
          data {
            text {
              html
            }
            title {
              text
            }
            background_text {
              text
            }
          }
        }
      }
    }
  }
`;

const StaticPage = ({ data, pageContext }) => {
  const { lang, uid } = pageContext;
  const page = data.pages.edges[0];

  if (!page) throw Error("Page not found");

  const title = page.node.data.title.text;
  const content = page.node.data.text.html;
  const backgroundText = page.node.data.background_text.text;

  return (
    <TranslationContext.Provider value={lang}>
      <Layout>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta
            property="og:url"
            content={`https://ibf.is/${lang}/page/${uid}`}
          />
        </Helmet>
        <Menu />
        <Section
          top="xlarge"
          bottom="xlarge"
          backgroundText={
            backgroundText.length <= 10 ? backgroundText : undefined
          }
          backgroundTextFontSize="small"
          legendTextColor="dark"
        >
          <StaticContent title={title} content={content} />
        </Section>
      </Layout>
    </TranslationContext.Provider>
  );
};
export default StaticPage;
