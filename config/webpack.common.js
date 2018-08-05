const path = require('path')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

require('babel-polyfill')

module.exports = {
  entry: ["babel-polyfill", './src/index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(process.cwd(), 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, '..', 'src/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '^runtime.*js$',
      template: 'src/index.html'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/'
  }
}
