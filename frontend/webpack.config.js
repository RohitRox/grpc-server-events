const path = require('path')

module.exports = {
  mode: "development",
  entry: "./main.js",
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 8000,
  },
};
