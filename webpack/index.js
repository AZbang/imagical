/* eslint-disable @typescript-eslint/no-var-requires */
const { plugins } = require('./plugins');
const { genericConfig } = require('./template');
const { devServer } = require('./devServer');
const output = require('./output');
const { optimization } = require('./optimization');

module.exports = { plugins, genericConfig, devServer, output, optimization };
