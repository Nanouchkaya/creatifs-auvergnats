/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Les Creatifs Auvergnats",
    description: "Collectif Les Créatifs Auvergnats, Etsy, fait-main, local",
    mail: "lescreatifsauvergnats@gmail.com",
    instagram: "https://www.instagram.com/teametsyauvergne",
    facebook: "https://www.facebook.com/teametsyauvergne",
    privateGroup: "https://www.facebook.com/groups/512000855657242",
    author: "Claudine Brun",
    site: "coding-claudine.eu",
  },
  plugins: [
    "gatsby-plugin-react-helmet", // head
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    // improves build speed
    "gatsby-plugin-netlify-cache",
    // plugins for contenful
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lxqqbd4acgor`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    // plugins for images
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    // plugin SEO
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Créatifs Auvergnats",
        short_name: "Créatifs A.",
        start_url: "/",
        background_color: "rgb(78, 28, 28)",
        theme_color: "rgb(78, 28, 28)",
        display: "standalone",
        icon: "static/favicon.ico",
        crossOrigin: `use-credentials`,
      },
    },
    // plugin to read markdown in long text from cms
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
}

// {
//   resolve: `gatsby-plugin-scroll-reveal`,
//   options: {
//     threshold: 0.7,
//   },
// },
