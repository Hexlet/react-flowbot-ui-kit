// @ts-check
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/init.jsx',
  target: [
    'web',
    'es2020',
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: {
      type: 'module',
    },
    clean: true,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new GeneratePackageJsonPlugin({
      name: 'react-flowbot-ui-kit',
      version: '0.1.0',
      main: './index.js',
      engines: {
        node: '>= 14',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  externals: ['react'],
};
