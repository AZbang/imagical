/* eslint-disable @typescript-eslint/no-var-requires */
const { genericConfig, plugins, devServer, output, optimization } = require('./webpack');

async function webpackPrestart(env, { mode }) {
  return {
    ...genericConfig,
    output: output[mode],
    plugins: plugins[mode],
    optimization: optimization[mode],
    devServer,
  };
}

module.exports = webpackPrestart;
