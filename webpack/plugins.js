/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

const htmlPluginConfig = {
  filename: 'index.html',
  hash: true,
};

const plugins = {
  production: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      ...htmlPluginConfig,
      template: path.resolve(__dirname, '../src/', 'static/template.html'),
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      compressionOptions: { level: 6 },
    }),
  ],
  development: [
    new HtmlWebpackPlugin({
      ...htmlPluginConfig,
      template: path.resolve(__dirname, '../src/', 'static/template.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: './dist/dll.manifest.json',
    }),
  ],
  vendors: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]',
      path: './dist/dll.manifest.json',
    }),
  ],
};

module.exports = { plugins };
