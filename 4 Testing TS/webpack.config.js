const path = require('path');

module.exports = {
   mode: 'development',
   entry: './src/app.ts',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
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
}