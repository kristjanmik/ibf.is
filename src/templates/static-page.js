import React from "react";
import { graphql } from "gatsby";
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
          }
        }
      }
    }
  }
`;

const StaticPage = ({ data, pageContext }) => {
  const { lang } = pageContext;
  const page = data.pages.edges[0];

  if (!page) throw Error("Page not found");

  return (
    <TranslationContext.Provider value={lang}>
      <Layout>
        <Menu />
        <Section
          top="xlarge"
          bottom="xlarge"
          //   backgroundText={T("blog")}
          legendTextColor="dark"
        >
          <StaticContent
            title={page.node.data.title.text}
            content={page.node.data.text.html}
          />
        </Section>
      </Layout>
    </TranslationContext.Provider>
  );
};
export default StaticPage;
