const path =  require('path');
const MiniCssExtractPLugic = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  context: path.resolve(__dirname, 'style'),
  entry: './scss/index.scss',
  output: {
    path: __dirname + '/assets'
  },
  module: {
    rules: [
      {
        test: /.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPLugic.loader,
            options: {
              reloadAll: true
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPLugic(),
    new FaviconsWebpackPlugin({
      logo: './media/example.png',
      prefix: 'favicon/',
      devMode: 'webapp'
    })
  ]
}
