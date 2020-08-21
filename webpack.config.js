const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const clientConfig = {
  // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  mode: "development",
  target: "web",
  entry: "./src/frontend/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/frontend/html/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpe?g)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"],
  },
  devtool: "inline-source-map",
}

const serverConfig = {
  mode: "development",
  target: "node",
  entry: "./src/backend/server.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"],
  },
  devtool: "inline-source-map",
}

module.exports = [serverConfig, clientConfig]
