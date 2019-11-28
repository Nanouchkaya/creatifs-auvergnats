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
    "gatsby-plugin-react-helmet", // head
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
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
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "rgb(78, 28, 28)",
        theme_color: "rgb(78, 28, 28)",
        display: "standalone",
        icon: "static/favicon.ico",
        crossOrigin: `use-credentials`,
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
