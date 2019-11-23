/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Les Creatifs Auvergnats",
    mail: "lescreatifsauvergnats@gmail.com",
    instagram: "https://www.instagram.com/teametsyauvergne",
    facebook: "https://www.facebook.com/teametsyauvergne",
    privateGroup: "https://www.facebook.com/groups/512000855657242",
    author: "Claudine Brun",
    portfolio: "coding-claudine.eu",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    // plugins pour les images
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    "gatsby-plugin-scroll-reveal",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "static/favicon.ico",
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
