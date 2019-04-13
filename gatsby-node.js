/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = function({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@portfolio": path.resolve(__dirname, "src"),
      },
    },
  });
};
