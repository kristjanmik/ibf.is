import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import Section from "src/ui/components/Section";
import PodcastsList from "src/ui/components/PodcastsList";
import { H1 } from "src/ui/components/Typography";
import TranslationContext from "src/utility/TranslationContext";
import { withLang } from "src/utility/Translation";

export const query = graphql`
  query PodcastsQuery($lang: String) {
    podcasts: allPrismicPodcast(
      filter: { lang: { eq: $lang } }
      sort: { fields: data___date, order: DESC }
    ) {
      edges {
        node {
          uid
          data {
            date
            image {
              url
            }
            name {
              text
            }
          }
        }
      }
    }
  }
`;

const Podcasts = ({ data, pageContext }) => {
  const { lang } = pageContext;
  const T = withLang(lang);

  let podcasts = data.podcasts.edges.map(({ node }) => ({
    uid: node.uid,
    name: node.data.name.text,
    image: node.data.image.url,
    date: node.date,
  }));

  const title = "Podcast - Rafmyntaráð";

  return (
    <TranslationContext.Provider value={lang}>
      <Layout>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:url" content={`https://ibf.is/${lang}/podcast`} />
        </Helmet>
        <Menu />

        <Section top="small" bottom="small">
          <H1 style={{ maxWidth: 1000 }}>{T("podcastContent")}</H1>
          {lang === "en-us" && (
            <p>
              <i>
                <a href="/is/podcast">
                  More episodes are available in Icelandic
                </a>
              </i>
            </p>
          )}
        </Section>
        <Section
          top="xlarge"
          bottom="xlarge"
          backgroundText={T("podcast")}
          backgroundTextFontSize="large"
          legendTextColor="dark"
        >
          <PodcastsList data={podcasts} />
        </Section>
      </Layout>
    </TranslationContext.Provider>
  );
};
export default Podcasts;
