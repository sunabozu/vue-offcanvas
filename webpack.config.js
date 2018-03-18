const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/vue-offcanvas.vue'),

  output: {
    path: path.resolve(__dirname + '/'),
    filename: 'index.js',
    library: 'VueOffcanvas',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.js', '.vue']
  },

  externals: {
    'vue': 'Vue'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
}