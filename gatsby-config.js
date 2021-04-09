const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TechBerg Blog`,
        short_name: `TechBerg`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "./src/assets/images/blog.png",
        lang: `en`,
        description: `Tech Berg Blog App template using Gatsby, Contentful and Netlify`,
      },
    },
  ],
};
