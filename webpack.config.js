const path = require('path')
const webpack = require('webpack')

const commonConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          typeCheck: true,
          emitErrors: true
        }
      },
      {
        test: /\.tsx?$/,
        loader: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'standard-loader',
        options: {
          typeCheck: true,
          emitErrors: true
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
      {
        test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
        loader : 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
    })
  ]
}

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = [
  Object.assign(
    {
      target: 'electron-main',
      entry: { main: './src/main.ts' },
      plugins: [ new webpack.SourceMapDevToolPlugin({ filename: '[name].js.map' }) ],
      node: {
        __dirname: false
      }
    },
    commonConfig),
  Object.assign(
    {
      devtool: 'source-map',
      target: 'electron-renderer',
      entry: { gui: './src/gui.tsx' },
      plugins: [
        new HtmlWebpackPlugin(),
        new webpack.SourceMapDevToolPlugin({ filename: '[name].js.map' })
      ],
      node: {
        __dirname: false
      }
    },
    commonConfig)
]
