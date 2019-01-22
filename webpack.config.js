const webpack = require('webpack');
const path = require('path');

const webpackPlugins = {
   HtmlPlugin: require('html-webpack-plugin'),
   CleanPlugin: require('clean-webpack-plugin'),
}

module.exports = {
   mode: 'development',
   entry: {
      //app: './src/index.js',
      //print: './src/print.js',
      app: './src/index.js'
   },
   devtool: 'inline-source-map',
   devServer: {
      contentBase: './dist',
      hot: true,
   },
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
   },
   module: {
      rules: []
   },
   plugins: [
      new webpackPlugins.CleanPlugin(['dist']),
      new webpackPlugins.HtmlPlugin({
         title: 'Output Management',
         template: './src/index.ejs',
         hash: true,
         minify: {
            collapseWhitespace: false,
         }
      }),
      new webpack.HotModuleReplacementPlugin(),
   ],
};