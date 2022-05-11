/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import RemoveDevtools from './src/common/RemoveDevtools'
import App from './src/components/App'

/** @type {import('gatsby').GatsbySSR['wrapPageElement']} */
export const wrapPageElement = ({ element, props }) => (
  <App {...props}>{element}</App>
)

/** @type {import('gatsby').GatsbySSR['onRenderBody']} */
export const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV === 'production')
    setHeadComponents([<RemoveDevtools />])
}
