require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Amanzi/ATS`,
    description: `Landing page for Amanzi/ATS`,
    siteUrl: process.env.SITE_URL,
    logo: `logo.png`,
    copyright: `© 2020 Los Alamos National Laboratory. All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `Case Studies`,
        path: `/case-studies`,
      },
      {
        title: `Gallery`,
        path: `/gallery`,
      },
      {
        title: `References`,
        path: `/references`,
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
    `gatsby-theme-flex`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
