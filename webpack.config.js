module.exports = {
  entry: './client/pages/Main/main.js',
  output: {
    path: __dirname + '/build',
    filename: 'webpack-bundle.js',
    publicPath: '/build/',
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-3', 'react'],
        },
      },
      { test: /(\.css|\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  devServer: {
    contentBase: __dirname,
    colors: true,
    historyApiFallback: true,
    inline: true
  },
};
