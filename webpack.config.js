const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.jsx"],
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          __dirname,
        ],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        include: path.resolve(__dirname, "src/assets"),
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      __dirname,
      path.join(__dirname, "src"),
      path.join(__dirname, "node_modules"), // the old 'fallback' option (needed for npm link-ed packages)
    ],
    alias: {
      "styles": path.resolve(__dirname, 'styles/'),
    }
  },
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
