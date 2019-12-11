/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// this is copied from gatsby-plugin-remove-trailing-slashes because it causes the build to fail if it is used direcly
const removeTrailingSlash = _path =>
  _path === "/" ? _path : _path.replace(/\/$/, "");

// You can delete this file if you're not using it
exports.onPreBootstrap = () => {
  require("isomorphic-fetch");
};

const languages = ["is", "en-us"];

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

//Genarate pages for working groups from remote datasource
exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
}) => {
  const { data } = await graphql(`
    query WorkingGroupQuery {
      groups: allPrismicWorkingGroup {
        edges {
          node {
            uid
            lang
            data {
              order
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
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      posts: allPrismicPost {
        edges {
          node {
            uid
            lang
            data {
              date: publish_date
              on_blog
            }
          }
        }
      }

      pages: allPrismicStaticPage {
        edges {
          node {
            uid
            lang
          }
        }
      }
    }
  `);

  let posts = data.posts.edges.map(p => ({
    date: p.node.data.date,
    uid: p.node.uid,
    lang: p.node.lang,
    on_blog: p.node.data.on_blog,
  }));

  posts.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) return 1;
    if (new Date(a.date) < new Date(b.date)) return -1;
    return 0;
  });

  posts
    .filter(p => p.on_blog === "yes")
    .map(({ uid, lang }) => {
      const url = `${lang}/blog/${uid}`;

      createPage({
        path: url,
        component: require.resolve("./src/templates/blog-post.js"),
        context: {
          uid: uid,
          lang,
          posts: posts.filter(p => p.lang === lang),
        },
      });
    });

  const groupsResult = data.groups.edges;

  if (!groupsResult || groupsResult.length === 0) {
    //@TODO Handle error cases
    throw Error("Could not load Working Groups");
  }

  //Prepare Groups
  const groups = groupsResult
    .map(r => ({ ...r.node.data, uid: r.node.uid, lang: r.node.lang }))
    .map(cleanGroup)
    .map(g => ({
      ...g,
      members: g.members.map(cleanUser),
    }));

  groups.sort((a, b) => {
    if (a.order > b.order) return 1;
    if (a.order < b.order) return -1;
    return 0;
  });

  //Start creating pages
  groups.map(({ uid, lang }) => {
    const url = `${lang}/working-group/${uid}`;

    createPage({
      path: url,
      component: require.resolve("./src/templates/working-group.js"),
      context: {
        uid: uid,
        lang,
        groups: groups.filter(g => g.lang === lang),
      },
    });
  });

  const pages = data.pages.edges.map(r => ({
    uid: r.node.uid,
    lang: r.node.lang,
  }));

  pages.map(({ uid, lang }) => {
    const url = `${lang}/page/${uid}`;
    console.log("creating page", url);

    createPage({
      path: url,
      component: require.resolve("./src/templates/static-page.js"),
      context: {
        uid: uid,
        lang,
      },
    });
  });

  languages.map(lang =>
    createPage({
      path: `/${lang}`,
      component: require.resolve("./src/templates/frontpage.js"),
      context: {
        lang,
        groups: groups.filter(g => g.lang === lang),
      },
    })
  );

  //Create extra frontpage until we have fixed redirect problem
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/frontpage.js"),
    context: {
      lang: "is",
      groups: groups.filter(g => g.lang === "is"),
    },
  });

  //Start creating redirects
  //@TODO Fix Redirects
  // createRedirect({
  //   fromPath: `/`,
  //   isPermanent: true,
  //   redirectInBrowser: true,
  //   toPath: `/is`,
  // });

  //404 Pages
  languages.forEach(lang =>
    createPage({
      path: `/${lang}/*`,
      matchPath: `/${lang}/*`,
      component: require.resolve("./src/templates/404.js"),
      context: {
        lang: lang,
      },
    })
  );

  //404 Pages - Catch all with English
  createPage({
    path: `*`,
    matchPath: `*`,
    component: require.resolve("./src/templates/404.js"),
    context: {
      lang: "en-us",
    },
  });
};
