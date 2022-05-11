import type { GatsbyConfig } from 'gatsby'

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    name: 'Geoffrey Tan',
    title: 'Geoffrey Tan · React Developer',
    titleTemplate: '%s | Geoffrey Tan · React Developer',
    siteUrl: 'https://weather.geoffreytan.dev',
    image: '/icon.png',
    description:
      "Geoffrey's Portfolio website. React Front-End Developer, based in the Netherlands.",
    email: 'contact@geoffreytan.dev',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      // @ts-ignore
      __key: 'images',
    },
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    /** Post plugins */
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['txt', 'css', 'html', 'xml', 'js', 'json', 'svg'],
      },
    },
  ],
  jsxRuntime: 'automatic', // react v17
}

export default gatsbyConfig
