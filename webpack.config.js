const path = require('path');

const webpackPlugins = {
   HtmlPlugin: require('html-webpack-plugin'),
   CleanPlugin: require('clean-webpack-plugin'),
}

module.exports = {
   mode: 'development',
   optimization: {
      usedExports: true
   },
   entry: {
      app: './src/index.js',
      print: './src/print.js',
   },
   devtool: 'inline-source-map',
   devServer: {
      contentBase: './dist',
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
         /*minify: {
            collapseWhitespace: false,
         }*/
      })
   ],
};