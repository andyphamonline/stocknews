const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    publicPath: "dist",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
    plugins: [new HtmlWebpackPlugin({
        template: 'public/index.html'
    })],
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: [/node_modules/]
        },
        {
            test: /\.css?$/,
            use: ['style-loader', 'css-loader'],
        },
    ]
  },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', 'jsx' ],
    },
  devtool: "inline-source-map",
}
