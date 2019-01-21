var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
   entry: {
      app: './src/index.js',
      print: './src/print.js',
   },
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   module: {
      rules: []
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Output Management',
         template: './src/index.ejs',
         hash: true,
         minify: {
            collapseWhitespace: true,
         }
      }),
   ],
};