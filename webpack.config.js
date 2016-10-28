const webpack = require('webpack')


module.exports = {
  entry: './src/vue-offcanvas.vue',

  output: {
    path: '.',
    filename: 'index.js',
    library: 'VueOffcanvas',
    libraryTarget: 'umd'
  },

  externals: {
    'vue': 'Vue'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-object-assign']
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
}