const { merge, mergeWithRules, CustomizeRule } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const baseConfiguration = require('./webpack.config.base');

const prodConfiguration = (env) => {
  return merge([
    {
      mode: 'production',
      output: {
        filename: 'bundle.[contenthash].js',
        chunkFilename: '[name].bundle.[contenthash].js'
      },
      devtool: false,
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            },
            styles: {
              name: 'styles',
              type: 'css/mini-extract',
              chunks: 'all',
              enforce: true
            }
          }
        },
        minimize: true,
        minimizer: [
          /* `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`) */
          `...`,
          new CssMinimizerPlugin()
        ]
      },
      module: {
        rules: [
          {
            test: /\.(scss|css)$/,
            use: [{ loader: MiniCssExtractPlugin.loader }]
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
          chunkFilename: '[id].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new CompressionPlugin(),
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: './public_bundle_sizes.html'
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
  })(baseConfiguration(env), prodConfiguration(env));

  return config;
};
