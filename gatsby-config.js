module.exports = {
  siteMetadata: {
    title: "Portfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter\:400,700`,
          `playfair display\:600`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
