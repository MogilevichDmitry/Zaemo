var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/index.jsx",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=1000000' },
    ]
  },

  devServer: {
    contentBase: "./dist",
    colors: true,
    historyApiFallback: true,
    inline: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
}