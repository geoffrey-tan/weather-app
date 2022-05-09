/* eslint-disable import/no-extraneous-dependencies */
import { config } from 'dotenv'
import type { GatsbyConfig } from 'gatsby'

config({
  path: `.env.${process.env.NODE_ENV}`,
})

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: 'weather-app',
    siteUrl: 'https://www.yourdomain.tld',
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
