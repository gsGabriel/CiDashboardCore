const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const cssnano = require('cssnano')

const bundleOutputDir = './wwwroot/dist';

module.exports = {
  entry:{ 'main': './App/startup.jsx'},
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
    }, {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      use: 'url-loader?limit=25000'
    }
    ]
  },
  output: {
    path: path.join(__dirname, bundleOutputDir),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
      sourceMap: true
    }),
    new ExtractTextPlugin('bundle.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]')
    })
  ]
}
