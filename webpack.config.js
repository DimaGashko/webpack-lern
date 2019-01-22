const path = require('path');

const webpackPlugins = {
   HtmlPlugin: require('html-webpack-plugin'),
   CleanPlugin: require('clean-webpack-plugin'),
}

module.exports = {
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
   },
   module: {
      rules: []
   },
   plugins: [
      new webpackPlugins.CleanPlugin(['dist']),
      new webpackPlugins.HtmlPlugin({
         title: 'Webpack learn',
         template: './src/index.ejs',
         hash: true,
         minify: {
            collapseWhitespace: true,
         }
      })
   ],
};