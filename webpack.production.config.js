var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + "/client/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  module: {
      loaders: [
        {
          test: /\.json$/,
          loader: "json"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.css$/,
          loader: 'style!css?modules'
        }
      ]
  },

  plugins: [
    new HtmlWebpackPlugin({
          template: __dirname + "/client/index.tmpl.html"
    }),
  ],

}
