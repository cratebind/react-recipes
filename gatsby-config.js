module.exports = {
  siteMetadata: {
    title: "Cratebind React Recipes",
    author: "Cratebind",
    siteUrl: process.env.URL || "https://cratebind-react-recipes.netlify.com/",
    description:
      "React Recipes and Examples For Cratebind"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Cratebind React Recipes",
        short_name: "Cratebind React Recipes",
        start_url: "/docs/get-started",
        background_color: "#5640dd",
        theme_color: "#5640dd",
        display: "minimal-ui",
        icon: "src/images/icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "examples",
        path: `${__dirname}/src/examples`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },
          "gatsby-remark-code-modifiers",
          "gatsby-remark-title",
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: 80,
              icon: "<span>#</span>"
            }
          }
        ]
      }
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`
      }
    },
    "gatsby-plugin-meta-redirect",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NWWM5K3"
      }
    }
  ]
};
