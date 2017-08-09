var webpack = require('webpack');
var path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        test: /\.js$/,
        query: {
          presets: ['es2015'],
          plugins: ['istanbul']
        }
      }, {
        loader: 'json',
        test: /\.json$/,
      }
    ]
  }
};
