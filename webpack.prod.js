// @ts-check
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: ['./src/init.tsx', './src/styles/style.scss'],
  target: [
    'web',
    'es2020',
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.ts',
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
      main: './index.ts',
      engines: {
        node: '>= 14',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: ['react'],
};
