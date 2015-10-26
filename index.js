'use strict';

var node_path = require('path');

// Get the root path of the project
function _package_root(dir, options, callback) {
  if (arguments.length === 2) {
    callback = options;
    options = {};
  }

  options.identity_filename = options.identity_filename || 'neuron.config.js';
  package_root(dir, options, callback);
}

var SYS_ROOT = node_path
  // in windows, sys_root will be 'c:\\'
  .resolve('/')
  // It is weird that sometime the disk name of windows is lowercase, sometime uppercase
  .toLowerCase();

function package_root (dir, options, callback) {
  if (!dir || dir.toLowerCase() === SYS_ROOT) {
    return callback();
  }

  fs.exists(node_path.join(dir, options.identity_filename), function (exists) {
    if (exists) {
      return callback(dir);
    }

    package_root(node_path.dirname(dir), options, callback);
  });
};
