/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const output = {
  production: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../', 'dist'),
  },
  development: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../', 'dist'),
  },
};

module.exports = output;
