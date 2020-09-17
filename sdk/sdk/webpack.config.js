const webpack = require('webpack')
const path = require('path')
const version = require('./package.json').version

module.exports = {
  entry: {
    [`sdk-${version}`]: './src/index.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: "commonjs2"
  }
}