const path = require('path');

module.exports = {
  resolve: {
    fallback: {}
  },
  mode: 'none',
  devtool: 'eval-source-map',
  entry: {
    main: './main.js',
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, '../js'),
    filename: '[name].js'
  }
};