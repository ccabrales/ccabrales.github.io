module.exports = {
  siteMetadata: {
    author: "Casey Cabrales",
    description: "Portfolio of Casey Cabrales",
    image: "/images/profile.jpg",
    title: "Casey Cabrales",
    url: "https://ccabrales.github.io",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$|\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
      },
    },
    `gatsby-plugin-sass`,
    "gatsby-plugin-material-ui",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
