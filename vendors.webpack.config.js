const path = require('path');
const { plugins } = require('./webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
    modules: [__dirname, './node_modules'],
  },
  entry: {
    library: ['react', 'react-dom', 'mobx', 'mobx-react', 'react-router-dom'],
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, './dist'),
    library: '[name]',
  },
  plugins: plugins['vendors'],
};
