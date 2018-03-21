//give it an entry point
// and a place to output bundle file

const path = require('path');

// console.log(path.join(__dirname, 'public'));

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}



//  NOTES
//  > using 'cheap-module-source-map' for devtool will eliminate the error: Uncaught Error: A cross-origin error was thrown.
//  > using ? in "test: /\.s?css$/" makes the "s" optional and allows us to use normalize.css. We can render css and scss files
