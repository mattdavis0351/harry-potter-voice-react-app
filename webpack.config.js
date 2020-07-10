const path = require("path");
const autoprefixer = require("autoprefixer");
module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "main.js"),
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].min.js",
    publicPath: "/public",
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer({})],
            },
          },
        ],
      },
    ],
  },
};
