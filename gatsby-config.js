require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Amanzi/ATS`,
    author: `Daniel Livingston`,
    social: {
      name: `GitHub`,
      url: `https://demo.com`
    },
    description: `Landing page for Amanzi/ATS`,
    siteUrl: `https://amanzi.github.io/sphinx-test`,
    pathPrefix: `sphinx-test`,
    assetPrefix: `sphinx-test`,
    logo: `logo.png`,
    copyright: `© 2020 Los Alamos National Laboratory. All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `./`,
      },
      {
        title: `Case Studies`,
        path: `./case-studies`,
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
        title: `GitHub`,
        path: `https://github.com/amanzi`,
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
    `gatsby-theme-gallery`,
    {
      resolve: `gatsby-theme-gallery`,
      options: {
        basePath: `/testme`,
      },
    },
    `gatsby-theme-flex`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
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
      },
    },
  ],
}
