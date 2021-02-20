const path = require("path");

var PrismicDOM = require("prismic-dom");
var Elements = PrismicDOM.RichText.Elements;

//https://prismic.io/docs/reactjs/beyond-the-api/link-resolving
// const { registerLinkResolver } = require("gatsby-source-prismic-graphql");
// const { linkResolver } = require("./src/utility/linkResolver");

// registerLinkResolver(linkResolver);

const linkResolver = ({ node, key, value }) => doc => {
  // Your link resolver
};

var htmlSerializer = function(type, element, content, children) {
  switch (type) {
    case Elements.heading1:
      return `<h1>${children.join("")}</h1>`;
    case Elements.heading2:
      return `<h2>${children.join("")}</h2>`;
    case Elements.heading3:
      return `<h3>${children.join("")}</h3>`;
    case Elements.heading4:
      return `<h4>${children.join("")}</h4>`;
    case Elements.heading5:
      return `<h5>${children.join("")}</h5>`;
    case Elements.heading6:
      return `<h6>${children.join("")}</h6>`;
    case Elements.paragraph:
      let hasCaption = false;
      children = children.map(child => {
        if (child.includes("[caption]")) {
          hasCaption = true;
          child = child.replace("[caption]", "");
        } else if (child.includes("[/caption]")) {
          child = child.replace("[/caption]", "");
        }
        return child;
      });

      if (hasCaption) {
        return `<div class="caption">${children.join("")}</div>`;
      }
      return `<p>${children.join("")}</p>`;
    case Elements.preformatted:
      return `<pre>${children.join("")}</pre>`;
    case Elements.strong:
      return `<strong>${children.join("")}</strong>`;
    case Elements.em:
      return `<em>${children.join("")}</em>`;
    case Elements.listItem:
      return `<li>${children.join("")}</li>`;
    case Elements.oListItem:
      return `<li>${children.join("")}</li>`;
    case Elements.list:
      return `<ul>${children.join("")}</ul>`;
    case Elements.oList:
      return `<ol>${children.join("")}</ol>`;
    case Elements.image:
      var linkUrl = element.linkTo
        ? PrismicDOM.Link.url(element.linkTo, linkResolver)
        : null;
      var linkTarget =
        element.linkTo && element.linkTo.target
          ? `target="${element.linkTo.target}" rel="noopener"`
          : "";
      var wrapperClassList = [element.label || "", "block-img"];
      var img = `<img src="${element.url}" alt="${element.alt ||
        ""}" copyright="${element.copyright || ""}">`;
      return `
        <p class="${wrapperClassList.join(" ")}">
          ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
        </p>
      `;
    case Elements.embed:
      return `
        <div class="embed-content" data-oembed="${element.oembed.embed_url}"
          data-oembed-type="${element.oembed.type}"
          data-oembed-provider="${element.oembed.provider_name}"
        >
          ${element.oembed.html}
        </div>
      `;
    case Elements.hyperlink:
      var target = element.data.target
        ? `target="${element.data.target}" rel="noopener"`
        : "";
      var linkUrl = PrismicDOM.Link.url(element.data, linkResolver);
      return `<a ${target} href="${linkUrl}">${children.join("")}</a>`;
    case Elements.label:
      var label = element.data.label ? ` class="${element.data.label}"` : "";
      return `<span ${label}>${children.join("")}</span>`;
    case Elements.span:
      return content ? content.replace(/\n/g, "<br />") : "";
    default:
      return null;
  }
};

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
        icon: "public/icons/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
    //@TODO Some issues, skip for now
    // "gatsby-plugin-offline",
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
        linkResolver,

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
        htmlSerializer: ({ node, key, value }) => htmlSerializer,

        schemas: {
          // Your custom types mapped to schemas
          member: require("./src/schemas/member.json"),
          event: require("./src/schemas/event.json"),
          working_group: require("./src/schemas/working_group.json"),
          about_page: require("./src/schemas/about_page.json"),
          post: require("./src/schemas/post.json"),
          podcast: require("./src/schemas/podcast.json"),
          static_page: require("./src/schemas/static_page.json"),
          education: require("./src/schemas/education.json"),
          education_category: require("./src/schemas/education_category.json"),
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
