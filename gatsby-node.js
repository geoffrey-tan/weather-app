/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/** @type {import('gatsby').GatsbyNode['onCreateWebpackConfig']} */
exports.onCreateWebpackConfig = ({
  getConfig,
  actions: { setWebpackConfig },
}) => {
  if (getConfig().mode === 'production')
    setWebpackConfig({
      devtool: false,
    })
}
