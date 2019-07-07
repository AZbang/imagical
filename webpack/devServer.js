/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const devServer = {
  index: 'index.html',
  hot: true,
  noInfo: true,
  open: true,
  overlay: true,
  port: 8080,
  host: '127.0.0.1',
  https: true,
  contentBase: [path.join(__dirname, '../src/', 'public'), path.join(__dirname, '../', 'dist')],
};

module.exports = { devServer };
