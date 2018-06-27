var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [path.join(__dirname, './src/index.js')],
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-react', 'babel-preset-es2015', 'babel-preset-stage-3']
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
