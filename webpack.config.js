var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
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
   ]
};