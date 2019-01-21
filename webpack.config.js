var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   module: {
      rules: []
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Webpack learn',
         template: './src/index.ejs',
         hash: true,
         minify: {
            collapseWhitespace: true,
         }
      }),
   ],
};