var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')


module.exports = {
  context: __dirname,
  entry: [
      // 'webpack-dev-server/client?http://localhost:3000',
      // 'webpack/hot/only-dev-server',
      './apps/static/js/index.js'
  ],

  output: {
      path: path.resolve('./apps/static/bundles/'),
      filename: 'main.js',
      publicPath: 'http://localhost:3000/static/bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  // module: {
  //   rules: [
  //     // we pass the output from babel loader to react-hot loader
  //     { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel'], },
  //   ],
  // },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },

    ],
  },

  resolve: {
    // modulesDirectories: ['node_modules', 'bower_components'],
    extensions: [ '.js', '.jsx']
  }
}
