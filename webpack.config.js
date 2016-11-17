var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(__dirname, 'app/components'),
      containers: path.resolve(__dirname, 'app/containers'),
      pages: path.resolve(__dirname, 'app/pages'),
    },
  },
  sassLoader: {
    includePaths: [
      './node_modules',
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        exclude: [/\.module\.css$/],
        loader: 'style-loader!css-loader!'
      },
      {
        test: /\.scss$/,
        exclude: [/\.inline\.scss$/, /\.module\.scss$/],
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.module\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  }
};
