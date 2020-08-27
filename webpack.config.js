const path = require("path");
const PROJECT_ROOT = path.join(__dirname, "./");

const HTMLPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    devtool: "eval",
    context: PROJECT_ROOT,
    entry: {
      app: "./src/js/index.js",
    },
    output: {
      path: path.join(PROJECT_ROOT, "dist"),
      filename: "[name].[hash].js",
      chunkFilename: "[name].[chunkhash].js",
    },
    performance: {
      hints: false,
    },
    watchOptions: {
      ignored: [/node_modules/],
    },
    module: {
      rules: [
        {
          test: /\.scss$|\.css$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            }
          ],
        },
        {
          test: /(\.js|\.jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new HTMLPlugin({
        template: "./src/index.html",
        title: "Survey Validator",
      }),
    ],
  };
};
