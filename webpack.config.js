const path = require("path");
const HWP = require("html-webpack-plugin");
const webpack = require("webpack");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split("/")
        .slice(1)
        .join("/");
      return `${filepath}/[name].[hash][ext][query]`;
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        type: "asset",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HWP({ template: path.join(__dirname, "/src/index.html") }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/assets/mil_white.svg",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      buffer: require.resolve("buffer"),
    },
  },
};
