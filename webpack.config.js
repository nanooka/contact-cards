// Generated using webpack-cli https://github.com/webpack/webpack-cli

// const path = require('path');
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// const HtmlWebpackPlugin = require("html-webpack-plugin");
import HtmlWebpackPlugin from "html-webpack-plugin";

const isProduction = process.env.NODE_ENV == "development";

const stylesHandler = "style-loader";

const fileName = fileURLToPath(import.meta.url);
console.log(fileName);
const __dirname = dirname(fileName);
console.log(__dirname);

const config = {
  entry: [
    "./src/js/contact-list.js",
    "./src/js/index.js",
    "./src/js/signup.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

export default function () {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
}
