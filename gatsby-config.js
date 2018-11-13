const path = require('path')

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
        head: false
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
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages')
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    
  ],
};
