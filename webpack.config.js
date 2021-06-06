const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html"
});

const outputPath = path.join(__dirname, 'dist');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css?$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  output: {
    filename: '[name].js',
    path: outputPath,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\\/]node_modules[\\\/].*/,
          name: "vendors"
        }
      }
    },
  },
  plugins: [htmlPlugin],
  devServer: {
    public: outputPath,
    static: outputPath,
    compress: true,
    port: 9000,
  },
};
