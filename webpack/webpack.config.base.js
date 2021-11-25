const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const WebpackAliases = require('./aliases');

module.exports = (env) => {
  return merge([
    {
      entry: ['./src/index.tsx'],
      output: {
        publicPath: '/',
        path: `${WebpackAliases.root}/build`,
        assetModuleFilename: 'assets/[path][hash][ext][query]'
      },
      resolve: {
        mainFields: ['browser', 'main', 'module'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: WebpackAliases
      },
      module: {
        rules: [
          {
            test: /\.(scss|css)$/,
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 1
                  // url: false
                }
              },
              {
                loader: 'postcss-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]
          },
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'ts-loader',
                options: {}
              }
            ],
            exclude: /node_modules/
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          ENV: JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
          ENV: JSON.stringify(process.env.NODE_ENV),
          title: 'Guest app',
          template: `${WebpackAliases.src}/index.ejs`,
          version: require(`${WebpackAliases.root}/package.json`).version,
          inject: 'body',
          minify: {
            removeComments: true,
            collapseWhitespace: true
          },
          hash: true
        }),
        new FaviconsWebpackPlugin({
          logo: `${WebpackAliases.src}/favicon.png`,
          cache: true,
          // https://github.com/itgalaxy/favicons
          favicons: {
            appName: 'pomvom-guest-app',
            appDescription: 'Pomvom awesome guest app',
            developerName: 'nevolgograd',
            background: '#fff',
            theme_color: '#333',
            icons: {
              android: true,
              appleIcon: true,
              appleStartup: false,
              favicons: true,
              coast: false,
              firefox: false,
              windows: false,
              yandex: false
            }
          }
        }),
        new Dotenv()
      ]
    }
  ]);
};
