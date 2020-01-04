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
        test: /\.m?(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
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
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'styleTag' }
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
              },
            },
          },
          'sass-loader',
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
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
