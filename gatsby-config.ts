import { config } from 'dotenv'
import type { GatsbyConfig } from 'gatsby'

config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      // @ts-ignore
      __key: 'images',
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: false,
      },
    },
  ],
}

export default gatsbyConfig
