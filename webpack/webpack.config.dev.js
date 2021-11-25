const webpack = require('webpack');
const { merge, mergeWithRules, CustomizeRule } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const WebpackAliases = require('./aliases');
const baseConfiguration = require('./webpack.config.base');

const devConfiguration = (env) => {
  return merge([
    {
      mode: 'development',
      output: {
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js'
      },
      devtool: 'eval',
      stats: {
        all: false,
        entrypoints: true,
        chunkGroups: true,
        timings: true,
        errors: true
      },
      devServer: {
        hot: true,
        https: false,
        port: 8080,
        compress: true,
        liveReload: true,
        static: `${WebpackAliases.root}/build`,
        historyApiFallback: {
          disableDotRule: true
        }
      },
      module: {
        rules: [
          {
            test: /\.(scss|css)$/,
            use: [{ loader: 'style-loader' }]
          },
          {
            test: /\.(mp4|svg|png|jpe?g|gif|woff(2)?)$/,
            type: 'asset/resource'
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css'
        })
      ]
    }
  ]);
};

module.exports = (env) => {
  const config = mergeWithRules({
    module: {
      rules: {
        test: CustomizeRule.Match,
        use: CustomizeRule.Prepend
      }
    }
  })(baseConfiguration(env), devConfiguration(env));

  return config;
};
