const path = require('path');

const webpackPlugins = {
   HtmlPlugin: require('html-webpack-plugin'),
   CleanPlugin: require('clean-webpack-plugin'),
}

module.exports = {
   mode: 'development',
   entry: {
      app: './src/index.js',
      print: './src/print.js',
   },
   devtool: 'inline-source-map',
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
            collapseWhitespace: false,
         }
      }),
   ],
};