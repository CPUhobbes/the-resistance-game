module.exports = {
  // This code will be compiled
  entry: './client/app/index.jsx',

  // Then output into this file
  output: {
    filename: './client/public/js/bundle.js',
  },

  // This will be what we do
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          // These are the specific transformations we'll be using.
          presets: ['react', 'es2015', 'flow', 'stage-0'],
          retainLines: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
};
