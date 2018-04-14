/* eslint-disable */
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./.babelrc'));
require('babel-polyfill');
require('babel-core/register')(config);
require('../src/server');
/* eslint-enable */