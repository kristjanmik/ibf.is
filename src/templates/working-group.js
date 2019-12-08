import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import WorkingGroupLayout from "src/ui/components/WorkingGroupLayout";
import { graphql } from "gatsby";
import TranslationContext from "src/utility/TranslationContext";

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
                      date(formatString: "DD/MM/YY HH:mm")
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
  const { groups, lang } = pageContext;

  const groupResult = data.group.edges[0];

  if (!groupResult) {
    //@TODO Handle error cases
    throw Error("Page not Found");
  }

  const {
    name,
    subheading,
    description,
    color,
    image,
    members,
    events,
  } = cleanGroup({ ...groupResult.node.data, uid: groupResult.node.uid });
  const coverImage =
    image.url ||
    "https://cdn.dribbble.com/users/851350/screenshots/5019761/packing.png";

  return (
    <TranslationContext.Provider value={lang}>
      <Layout>
        <Menu />
        <WorkingGroupLayout
          name={name}
          subheading={subheading}
          description={description}
          coverImage={coverImage}
          color={color}
          members={members.map(cleanUser)}
          events={events.filter(e => e.event.document).map(cleanEvent)}
          groups={groups}
        />
      </Layout>
    </TranslationContext.Provider>
  );
};
export default WorkingGroupTemplate;
