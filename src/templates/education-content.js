import React from "react";
import { graphql } from "gatsby";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import Section from "src/ui/components/Section";
import EducationContent from "src/ui/components/EducationContent";
import TranslationContext from "src/utility/TranslationContext";
// import { withLang } from "src/utility/Translation";
import Helmet from "react-helmet";

export const query = graphql`
  query SingleEducationQuery($lang: String, $uid: String) {
    education: allPrismicEducation(
      filter: { lang: { eq: $lang }, uid: { eq: $uid } }
    ) {
      edges {
        node {
          uid
          data {
            summary {
              text
            }
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
              ... on PrismicEducationBodyPodcast {
                slice_type
                id
                primary {
                  podcast {
                    document {
                      ... on PrismicPodcast {
                        id
                        data {
                          image {
                            url
                          }
                          description {
                            html
                          }
                          name {
                            html
                            text
                            raw
                          }
                          embed {
                            html
                          }
                        }
                      }
                    }
                  }
                }
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

const BlogPost = ({ data, pageContext }) => {
  const { uid, lang } = pageContext;
  let education = data.education.edges[0];

  if (!education) throw Error("Page not Found");

  education = education.node.data;

  // const T = withLang(lang);

  const body = education.body[0];

  let title = education.title.text;
  let image = education.image.url;
  let summary;
  let content;
  let youtube;
  let podcast;

  if (body && body.slice_type === "podcast") {
    console.log("what is body", body);

    summary = body.primary.podcast.document.data.description.text;
    content = body.primary.podcast.document.data.description.html;
    podcast = body.primary.podcast.document.data.embed.html;

    const podcastImage = body.primary.podcast.document.data.image
      ? body.primary.podcast.document.data.image.url
      : null;

    if (podcastImage) {
      image = `${podcastImage}&fit=crop&h=261&w=500&crop=top`;
    }
  } else {
    summary = education.summary.text;
    content = education.content.html;
  }
  if (body && body.slice_type === "youtube") {
    youtube = {
      url: body.primary.url.url.replace(
        "youtube.com/watch?v=",
        "youtube.com/embed/"
      ),
    };
  }

  return (
    <TranslationContext.Provider value={lang}>
      <Layout>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={summary} />
          <meta name="description" content={summary} />
          {image && <meta name="twitter:image:alt" content={title} />}
          {image && <meta property="og:image" content={image} />}
          {image && <meta name="image" content={image} />}
          <meta
            property="og:url"
            content={`https://ibf.is/${lang}/education/${uid}`}
          />
          <meta property="og:type" content="article" />
        </Helmet>
        <Menu />
        <Section
          top="xsmall"
          bottom="xlarge"
          backgroundText={"myndband"}
          legendTextColor="dark"
        >
          <EducationContent
            title={title}
            image={image}
            content={content}
            youtube={youtube}
            podcast={podcast}
          />
        </Section>
      </Layout>
    </TranslationContext.Provider>
  );
};
export default BlogPost;
