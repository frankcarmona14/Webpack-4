const path = require("path");
const MiniCSSExtracPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  devServer: {
    hot: true,
<<<<<<< HEAD
    open: true,
    port: 9000,
=======
>>>>>>> f7b1eb446adf57abfb99208f905ef0cfc633b53d
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack-dev-server",
    }),
  ],
};
