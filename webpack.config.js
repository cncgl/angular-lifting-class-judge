var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var annotate = new ngAnnotatePlugin({
    add: true
});

var bower = new BowerWebpackPlugin({
  modulesDirectories: ["bower_components"],
  manifestFiles:      "bower.json",
  includes:           /.*/,
  excludes:           [/.*\.css/]
});

var extractCSS = new ExtractTextPlugin(
  '[name].css',
  // "styles/[name].[chunkhash].css",
  { allChunks: true }
);

module.exports = {
  entry: {
    vendors: "../vendors/vendors",
    app: "./app.js"
  },
  module: {
    loaders: [
      {
        test: [/.*\/core\/.*\.js$/,/.*\/app\/.*\.js$/],
        loader: "ng-cli-transformer"
      },
      // {
      //   test: /\.css$/,
      //   loader: extractCSS.extract('style-loader', 'css-loader?modules&localIdentName=[name]__[local]&importLoaders=1', 'postcss-loader'),
      //   include: path.join(__dirname, 'app')
      // },
      // {
      //   test: /\.css$/,
      //   loader: extractCSS.extract('style-loader', 'css-loader'),
      //   // loader: "!style-loader!css-loader",
      //   exclude: path.join(__dirname, 'app')
      // }
    ]
  },
  cache: true,
  output: {
      path: __dirname,
      filename: "[name].js"
  },
  module: {
  },
  plugins: [annotate, bower, extractCSS],
  debug: true
};
