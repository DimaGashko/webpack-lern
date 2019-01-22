const webpack = require('webpack');
const path = require('path');

const plugins = {
   HtmlPlugin: require('html-webpack-plugin'),
   CleanPlugin: require('clean-webpack-plugin'),
}

module.exports = {
   mode: 'production',
   entry: {
      app: './src/index.js',
      //print: './src/print.js',
      //module2: './src/module2.js',
   },
   output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
   },
   optimization: {
      runtimeChunk: 'single',
      splitChunks: {
         cacheGroups: {
            vendor: {
               test: /[\\/]node_modules[\\/]/,
               name: 'vendors',
               chunks: 'all'
            }
         }
      }
   },
   module: {
      rules: []
   },
   plugins: [
      new plugins.CleanPlugin(['dist']),
      new plugins.HtmlPlugin({
         title: 'Webpack learn',
         template: './src/index.ejs',
         hash: false,
         minify: {
            collapseWhitespace: true,
         }
      }),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.ProvidePlugin({
         _join: ['lodash', 'join'],
      })
   ],
   
};