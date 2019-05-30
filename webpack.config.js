const path = require("path");

module.exports = {
  entry: "./client/App.jsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx", "webpack.js", ".web.js"] },
  output: {
    path: path.resolve(__dirname, "client/dist/"),
    publicPath: "/client/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "client/dist/"),
    port: 3000,
    publicPath: "http://localhost:3000/client/"
  }
};