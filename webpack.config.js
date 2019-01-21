const path = require('path');

const webpackPlugins = {
   HtmlPlugin: require('html-webpack-plugin'),
   CleanPlugin: require('clean-webpack-plugin'),
}

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
      new webpackPlugins.CleanPlugin(['dist']),
      new webpackPlugins.HtmlPlugin({
         title: 'Output Management',
         template: './src/index.ejs',
         hash: true,
         minify: {
            collapseWhitespace: true,
         }
      }),
   ],
};