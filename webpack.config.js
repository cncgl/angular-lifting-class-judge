// var path = require('path');
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

// var extractCSS = new ExtractTextPlugin(
//   '[name].css',
//   { allChunks: true }
// );

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
      }
    ]
  },
  cache: true,
  output: {
      path: __dirname,
      filename: "[name].js"
  },
  module: {
  },
  // plugins: [annotate, bower, extractCSS],
  plugins: [annotate, bower]
};
