const path = require('path');

const aliases = {
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src/'),
  api: path.resolve(__dirname, '../src/api'),
  App: path.resolve(__dirname, '../src/App'),
  assets: path.resolve(__dirname, '../src/assets'),
  core: path.resolve(__dirname, '../src/core'),
  features: path.resolve(__dirname, '../src/features'),
  services: path.resolve(__dirname, '../src/services'),
  styles: path.resolve(__dirname, '../src/styles'),
  types: path.resolve(__dirname, '../src/types')
};

module.exports = aliases;
