const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle'),
  },
  devServer: {
    host: '192.168.1.5',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', path.resolve(__dirname, 'core')],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
    ],
  },
};
