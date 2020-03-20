require(`dotenv`).config()

module.exports = {
  pathPrefix: `/landing-page-test`,
  siteMetadata: {
    title: `Amanzi/ATS`,
    author: `Daniel Livingston`,
    description: `Landing page for Amanzi/ATS`,
    siteUrl: `https://daniellivingston.github.io/amanzi-landing-page`,
    logo: `logo.png`,
    copyright: `© 2020 Los Alamos National Laboratory. All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `./`,
      },
      {
        title: `About`,
        path: `./about`,
      },
      {
        title: `Gallery`,
        path: `./gallery`,
      },
      {
        title: `References`,
        path: `./references`,
      },
      {
        title: `Downloads`,
        path: `./downloads`,
      },
    ],
    footerLinks: [
      {
        title: `GitHub`,
        path: `https://github.com/amanzi`,
      },
    ],
  },
  plugins: [
    `gatsby-theme-flex`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    `gatsby-image`,
    `gatsby`,
    {
      resolve: "gatsby-plugin-mdx",
      plugins: [`gatsby-remark-images`, `gatsby-remark-videos`],
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets/images`,
        name: `${__dirname}/assets/images`,
      },
    },
  ],
}
