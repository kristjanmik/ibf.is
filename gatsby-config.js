const path = require("path");

//https://prismic.io/docs/reactjs/beyond-the-api/link-resolving
// const { registerLinkResolver } = require("gatsby-source-prismic-graphql");
// const { linkResolver } = require("./src/utility/linkResolver");

// registerLinkResolver(linkResolver);

module.exports = {
  siteMetadata: {
    title: "Icelandic Blockchain Foundation",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-117256283-1",
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Icelandic Blockchain Foundation",
        short_name: "ibf",
        start_url: "/",
        background_color: "#00488e",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: "rafmyntarad",

        // An API access token to your prismic.io repository. This is required.
        // You can generate an access token in the "API & Security" section of
        // your repository settings. Setting a "Callback URL" is not necessary.
        // The token will be listed under "Permanent access tokens".
        accessToken:
          "MC5YZWpuUWhFQUFJMHpVWFRo.ZAXvv71cT3nvv705T--_ve-_vXHvv71lKQLvv71y77-9bEp-77-977-977-9a--_vWPvv73vv70oPA",

        // Set a link resolver function used to process links in your content.
        // Fields with rich text formatting or links to internal content use this
        // function to generate the correct link URL.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different link resolver logic for each field if necessary.
        // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
        },

        // Set a list of links to fetch and be made available in your link
        // resolver function.
        // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
        fetchLinks: [
          // Your list of links
        ],

        // Set an HTML serializer function used to process formatted content.
        // Fields with rich text formatting use this function to generate the
        // correct HTML.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different HTML serializer logic for each field if necessary.
        // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          // Your HTML serializer
        },
        schemas: {
          // Your custom types mapped to schemas
          member: require("./src/schemas/member.json"),
          event: require("./src/schemas/event.json"),
          working_group: require("./src/schemas/working_group.json"),
          about_page: require("./src/schemas/about_page.json"),
        },
        lang: "*",
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return true;
        },
        typePathsFilenamePrefix: "prismic-typepaths---rafmyntarad",
      },
    },
  ],
};
