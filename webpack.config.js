const path = require("path");
const HWP = require("html-webpack-plugin");
const webpack = require("webpack");
const commitHash = require("child_process").execSync(
  "git rev-parse --short HEAD",
);
const CompressionPlugin = require("compression-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const getCurrentTimeEST = () => {
  const now = new Date();
  const options = {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  return new Intl.DateTimeFormat("en-US", options).format(now).replace(",", "");
};
const currentTime = getCurrentTimeEST();

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
      return `${filepath}/[name][ext]`;
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
        test: /\.(png|jpeg|jpg|gif|svg|eot|ttf|woff|woff2|pdf)$/,
        type: "asset",
      },
    ],
  },
  // TODO: why is this not working :(
  // optimization: {
  //   minimizer: [
  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.sharpMinify,
  //         options: {
  //           failOnError: false,
  //           encodeOptions: {
  //             jpeg: {
  //               quality: 90,
  //             },
  //             // png by default sets the quality to 100%, which is same as lossless
  //             // https://sharp.pixelplumbing.com/api-output#png
  //             png: {},

  //             // gif does not support lossless compression at all
  //             // https://sharp.pixelplumbing.com/api-output#gif
  //             gif: {},
  //           },
  //         },
  //       },
  //     }),
  //   ],
  // },
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
    new webpack.DefinePlugin({
      COMMIT_HASH: JSON.stringify(commitHash.toString().trim()),
      BUILD_TIME: JSON.stringify(currentTime),
    }),
    new CompressionPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      buffer: require.resolve("buffer"),
    },
  },
};
