module.exports = {
  siteMetadata: {
    title: `Andrzej Duda Transport & Logistics`,
    description: `Andrzej Duda Transport & Logistics is one of Poland's leading transport companies. Its strong market position lies in the freight transport, contract logistics and overland businesses.`,
    url: `https://dudatransport.com`,
    author: `Julio Soto | juliosoto.dev`,
    twitterUsername: `@jsberlanga`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Domine", "Lora:400,400i,700,700i", "Montserrat"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-141503879-2",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#38598b`,
        theme_color: `#38598b`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
