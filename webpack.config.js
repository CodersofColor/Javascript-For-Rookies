const path = require('path');

module.exports = {
  entry: './sessions/20_ModernTools/webpack/index.js',
  output: {
    path: path.resolve(__dirname, 'sessions/20_ModernTools/webpack/js'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'sessions/20_ModernTools/webpack/'),
    publicPath: '/js/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_mdules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
    ]
  },
  mode: "production"
};