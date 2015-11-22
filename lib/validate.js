'use strict';

module.exports = validate;

var node_path = require('path');


function validate (config, root, callback) {
  [
    'src',
    'dist',
    'release'
  ].forEach(function (key) {
    config[key] = node_path.resolve(root, config[key]);
  });

  callback(null, config);
}
