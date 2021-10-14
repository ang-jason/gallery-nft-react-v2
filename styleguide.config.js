const {
  createWebpackDevConfig,
  createWebpackProdConfig,
} = require("@craco/craco");
const cracoConfig = require("./craco.config");
const path = require("path");

/**
 * @type {import('react-styleguidist').StyleguidistConfig}
 */
module.exports = {
  components: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    'src/domains/gallery/components/**/*.{js,jsx,ts,tsx}',
    'src/domains/watchlist/components/**/*.{js,jsx,ts,tsx}'
  ],
  require: [path.resolve(__dirname, "src/index.css")],
  webpackConfig:
    process.env.NODE_ENV === "production"
      ? createWebpackProdConfig(cracoConfig)
      : createWebpackDevConfig(cracoConfig),
};
