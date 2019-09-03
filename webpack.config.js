const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const debug = true;

module.exports = {
  mode: debug ? "development" : "production",
  entry: "./src/js/app.js",
  //   entry: {
  //     app: "./src/js/app.js",
  //     progetti: "./src/js/progetti.js",
  //     servizi: "./src/js/servizi.js"
  //   },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      // test: /\.css$/,
      // use: [
      //     'style-loader',
      //     'css-loader'
      // ]
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015"]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(jpg|png|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "img/",
            publicPath: "img/",
            name(file) {
              if (debug) return "[name].[ext]";
              return "[name].[ext]";
              //   return "[contenthash].[ext]?[contenthash]";
            }
          }
        }
      },
      {
        test: /\.(ttf)$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "font/",
            publicPath: "font/",
            name(file) {
              if (debug) return "[path][name].[ext]";
              return "[contenthash].[ext]?[contenthash]";
            }
          }
        }
      }
    ]
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      filename: "progetti.html",
      template: "src/progetti.html"
    }),
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: "src/index.html"
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "progetti.html",
    //   template: "src/progetti.html",
    //   chunks: {
    //     head: {
    //       entry: "main.js",
    //       css: ["main.css"]
    //     }
    //   }
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "servizi.html",
    //   template: "src/servizi.html",
    //   chunks: {
    //     head: {
    //       entry: "main.js",
    //       css: ["main.css"]
    //     }
    //   }
    // }),
    new CleanWebpackPlugin()
  ]
};