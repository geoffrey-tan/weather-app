/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import App from './src/components/App'

/** @type {import('gatsby').GatsbyBrowser['wrapPageElement']} */
export const wrapPageElement = ({ element, props }) => (
  <App {...props}>{element}</App>
)
