const optimization = {
  production: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          filename: '[name].vendor.js',
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          filename: '[name].main.js',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  development: {
    splitChunks: {},
  },
};

module.exports = { optimization };
