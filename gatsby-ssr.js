/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import RemoveDevtools from './src/common/RemoveDevtools'

/** @type {import('gatsby').GatsbySSR['onRenderBody']} */
export const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV === 'production')
    setHeadComponents([<RemoveDevtools />])
}
