import React from "react";
import Helmet from "react-helmet";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import WorkingGroupLayout from "src/ui/components/WorkingGroupLayout";
import { graphql } from "gatsby";
import TranslationContext from "src/utility/TranslationContext";
import { withLang } from "src/utility/Translation";

export const query = graphql`
  query WorkingGroupTemplateQuery($uid: String!, $lang: String!) {
    group: allPrismicWorkingGroup(
      filter: { uid: { eq: $uid }, lang: { eq: $lang } }
    ) {
      edges {
        node {
          uid
          data {
            color
            name {
              text
            }
            description {
              text
            }
            image {
              url
            }
            members {
              user {
                document {
                  ... on PrismicMember {
                    id
                    data {
                      name {
                        text
                      }
                      profile {
                        url
                      }
                      title {
                        text
                      }
                      email
                    }
                  }
                }
              }
            }
            subheading {
              text
            }
            events {
              event {
                document {
                  ... on PrismicEvent {
                    id
                    data {
                      address
                      date(formatString: "YYYY/MM/DD HH:mm")
                      day: date(formatString: "DD.MMM")
                      title {
                        text
                      }
                      url {
                        url
                      }
                      description {
                        text
                      }
                      image {
                        url
                      }
                      subheading {
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
    }
  }
`;

const cleanUser = obj => {
  const { name, email, profile, title } = obj.user.document.data;

  return {
    email,
    name: name ? name.text : "",
    profile: profile ? profile.url : "",
    title: title ? title.text : "",
  };
};

const defaultEventImage =
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

const cleanEvent = obj => {
  const {
    address,
    day,
    title,
    url,
    description,
    subheading,
    image,
  } = obj.event.document.data;

  return {
    ...obj.event.document.data,
    address,
    day,
    title: title ? title.text : "",
    url: url ? url.url : "",
    description: description ? description.text : "",
    subheading: subheading ? subheading.text : "",
    image: image ? image.url : defaultEventImage,
  };
};

const cleanGroup = obj => {
  const { name, subheading, description, image } = obj;
  return {
    ...obj,
    name: name ? name.text : "",
    subheading: subheading ? subheading.text : "",
    description: description ? description.text : "",
    image: image.url,
  };
};

const WorkingGroupTemplate = ({ data, pageContext }) => {
  const { groups, lang, uid } = pageContext;

  const groupResult = data.group.edges[0];

  if (!groupResult) {
    //@TODO Handle error cases
    throw Error("Page not Found");
  }

  const T = withLang(lang);

  const {
    name,
    subheading,
    description,
    color,
    image,
    members,
    events,
  } = cleanGroup({
    ...groupResult.node.data,
    uid: groupResult.node.uid,
  });
  const coverImage =
    image.url ||
    "https://cdn.dribbble.com/users/851350/screenshots/5019761/packing.png";

  const title = `${name} - ${T("foundationName")}`;
  const now = new Date();
  const today = new Date(
    `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
  );

  const nextEvents = events
    .filter(e => e.event.document)
    .map(cleanEvent)
    .filter(e => {
      const eventDate = new Date(e.date);
      const eventDay = new Date(
        `${eventDate.getFullYear()}-${eventDate.getMonth() +
          1}-${eventDate.getDate()}`
      );
      if (eventDay >= today) return true;
      return false;
    });

  nextEvents.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) return 1;
    if (new Date(a.date) < new Date(b.date)) return -1;
    return 0;
  });

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
          <meta
            property="og:url"
            content={`https://ibf.is/${lang}/blog/${uid}`}
          />
          <meta property="og:type" content="article" />
        </Helmet>
        <Menu />
        <WorkingGroupLayout
          name={name}
          subheading={subheading}
          description={description}
          coverImage={coverImage}
          color={color}
          members={members.map(cleanUser)}
          events={nextEvents}
          groups={groups}
        />
      </Layout>
    </TranslationContext.Provider>
  );
};
export default WorkingGroupTemplate;
