import React from "react";
import { graphql } from "gatsby";

import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import Hero from "src/ui/components/Hero";
import Section from "src/ui/components/Section";
import WorkingGroupsSection from "src/ui/sections/WorkingGroupsSection";
import UpcomingEventsSection from "src/ui/sections/UpcomingEventsSection";
import NewsletterForm from "src/ui/components/NewsletterForm";
import NewsletterAnchorButton from "src/ui/components/NewsletterAnchorButton";
import RecentPostsSection from "src/ui/sections/RecentPostsSection";
import AboutSection from "src/ui/sections/AboutSection";
import NewsletterSection from "src/ui/sections/NewsletterSection";
import { withLang } from "src/utility/Translation";
import TranslationContext from "src/utility/TranslationContext";

export const query = graphql`
  query FrontpageQuery($lang: String!) {
    about: prismicAboutPage(lang: { eq: $lang }, uid: { eq: "about" }) {
      id
      data {
        description {
          html
        }
        headline1 {
          text
        }
        headline2 {
          text
        }
        headline3 {
          text
        }
        name {
          html
          text
          raw
        }
        quote {
          html
        }
        quote_title {
          text
        }
        text1 {
          html
        }
        text2 {
          html
        }
        text3 {
          html
        }
      }
    }

    events: allPrismicEvent(filter: { lang: { eq: $lang } }) {
      edges {
        node {
          data {
            address
            day: date(formatString: "DD.MMM")
            date
            description {
              text
            }
            image {
              url
            }
            subheading {
              text
            }
            title {
              text
            }
            url {
              url
            }
            working_group {
              document {
                ... on PrismicWorkingGroup {
                  data {
                    color
                    name {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    posts: allPrismicPost(filter: { lang: { eq: $lang } }) {
      edges {
        node {
          uid
          data {
            image {
              url
            }
            on_blog
            date: publish_date
            summary {
              text
            }
            text {
              html
            }
            title {
              text
            }
            author {
              document {
                ... on PrismicMember {
                  id
                  data {
                    name {
                      text
                    }
                    title {
                      text
                    }
                  }
                }
              }
            }
            body {
              ... on PrismicPostBodyPodcastSlice {
                id
                primary {
                  podcast {
                    id
                    document {
                      ... on PrismicPodcast {
                        id
                        data {
                          description {
                            text
                          }
                          image {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicPostBodyEventSlice {
                id
                primary {
                  event {
                    document {
                      ... on PrismicEvent {
                        id
                        data {
                          address
                          title {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicPostBodyExternalLink {
                id
                primary {
                  link {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data, pageContext: { groups, lang } }) => {
  const T = withLang(lang);

  const about = data.about.data;
  const aboutDescription = about.description.html;
  const aboutStatements = [
    { title: about.headline1.text, text: about.text1.html },
    { title: about.headline2.text, text: about.text2.html },
    { title: about.headline3.text, text: about.text3.html },
  ];

  let events = data.events.edges.map(edge => ({
    ...edge.node.data,
    description: edge.node.data.description.text,
    image: edge.node.data.image.url,
    subheading: edge.node.data.subheading.text,
    title: edge.node.data.title.text,
    url: edge.node.data.url.url,
    workingGroupName: edge.node.data.working_group.document.data.name.text,
    color: edge.node.data.working_group.document.data.color,
  }));

  events.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) return 1;
    if (new Date(a.date) < new Date(b.date)) return -1;
    return 0;
  });

  //@TODO do not do page blank if url is internal
  //@TODO generate correct url based on type
  const cleanPosts = edge => {
    const uid = edge.node.uid;
    let obj = {
      ...edge.node.data,
      date: edge.node.data.date,
      title: edge.node.data.title.text,
      text: edge.node.data.summary.text,
      image: edge.node.data.image.url,
      url: `/${lang}/blog/${uid}`,
      isFeatured: false,
    };
    const body = edge.node.data.body[0];

    //No slice
    if (!body) return obj;

    if (body.primary.link) {
      //Type is link
      obj.url = body.primary.link.url;
    } else if (body.primary.podcast && body.primary.podcast.document) {
      //Type is podcast
      //@TODO special links for podcast or just a special type of blog?
      obj.image = body.primary.podcast.document.data.image.url;
    }

    return obj;
  };

  let posts = data.posts.edges.map(cleanPosts);

  posts.sort((a, b) => {
    if (new Date(a.date).getTime() > new Date(b.date).getTime()) return -1;
    if (new Date(a.date).getTime() < new Date(b.date).getTime()) return 1;
    return 0;
  });

  posts = posts.map((obj, index) => {
    if (index === 0) {
      obj.isFeatured = true;
    }
    return obj;
  });

  console.log("posts", posts);

  return (
    <TranslationContext.Provider value={lang}>
      <Layout>
        <Menu inHero />
        <Hero
          title={T("foundationName")}
          description={T("foundationDescription")}
        >
          <NewsletterAnchorButton />
          <NewsletterForm inHero placeholder={T("newsletterPlaceholder")} />
        </Hero>
        <Section
          top="xlarge"
          bottom="xlarge"
          backgroundText={T("foundationBackgroundHeading")}
          id="about"
          number="02"
          legendText={T("aboutHeading")}
          legendColor="dark"
        >
          <AboutSection
            title={T("foundationName")}
            text={aboutDescription}
            statements={aboutStatements}
          />
        </Section>
        <Section
          top="xlarge"
          bottom="xlarge"
          colored
          backgroundText={T("eventsBackgroundHeading")}
          id="events"
          number="03"
          legendText={T("events")}
          footerText={T("goToEvents")}
          footerTextColor="light"
          footerUrl="https://www.meetup.com/Icelandic-Blockchain-Foundation"
        >
          <UpcomingEventsSection events={events} />
        </Section>
        <Section
          top="xlarge"
          bottom="xlarge"
          backgroundText={T("postsBackgroundHeading")}
          id="posts"
          number="04"
          legendText={T("recentPosts")}
          legendTextColor="dark"
          footerText={T("visitBlog")}
          footerTextColor="dark"
          footerUrl="https://medium.com/icelandic-blockchain-foundation"
        >
          <RecentPostsSection posts={posts} />
        </Section>
        <Section
          colored
          top="xlarge"
          bottom="xlarge"
          backgroundText={T("groupsBackgroundHeading")}
          id="working-groups"
          number="05"
          legendText={T("workingGroups")}
          footerText={T("visitWorkingGroups")}
          footerTextColor="light"
          footerUrl="#working-groups"
        >
          <WorkingGroupsSection groups={groups} />
        </Section>
        <Section
          top="huge"
          bottom="huge"
          id="newsletter"
          number="06"
          legendText={T("newsletter")}
          legendTextColor="dark"
        >
          <NewsletterSection />
        </Section>
      </Layout>
    </TranslationContext.Provider>
  );
};

export default IndexPage;
