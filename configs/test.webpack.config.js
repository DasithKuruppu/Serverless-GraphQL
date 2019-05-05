const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");
const fs = require('fs');

const TestEntries = fs.readdirSync('./__tests__').filter(function(file) {
  return file.match(/.*\.ts$/);
});

module.exports = {
    entry: TestEntries.reduce(function(prev,currentfileName){
      var pathObj= Object.assign({},prev);
      var splitFiles=currentfileName.split(".");
      var newFileName=splitFiles.slice(0,splitFiles.length-1).join(".");
      pathObj[newFileName]=path.join(__dirname, "../__tests__/"+currentfileName)
      return pathObj;
    },{}),
    target: "node",
    mode: slsw.lib.webpack.isLocal ? "development" : "production",
    optimization: {
      // We no want to minimize our code.
      minimize: false,
    },
    performance: {
      // Turn off size warnings for entry points
      hints: false,
    },
    devtool: "cheap-module-source-map",
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre",
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      libraryTarget: "commonjs2",
      path: path.join(__dirname, "../__tests__/"),
      filename: "[name].js",
      sourceMapFilename: "[file].map",
    },
  };