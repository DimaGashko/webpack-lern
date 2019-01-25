const webpack = require('webpack');
const path = require('path');

const plugins = {
   HtmlPlugin: require('html-webpack-plugin'),
   CleanPlugin: require('clean-webpack-plugin'),
}

module.exports = {
   entry: {
      app: './src/index.ts',
      print: './src/print.ts',
      module2: './src/module2.ts',
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
      rules: [{
         test: /\.tsx?$/,
         use: [
            {
               loader: 'ts-loader',
               options: {
                  transpileOnly: true,
                  experimentalWatchApi: true,
               },
            },
         ],
         exclude: /node_modules/
      }]
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js']
   },
   plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
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
   ],

};