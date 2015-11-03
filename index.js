'use strict';

module.exports = package_root;

var node_path = require('path');
var fs = require('fs');

// Get the root path of the project
function package_root(dir, options, callback) {
  if (arguments.length === 2) {
    callback = options;
    options = {};
  }

  options.identity_filename = options.identity_filename || 'neuron.config.js';
  _package_root(dir, options, callback);
}


var SYS_ROOT = node_path
  // in windows, sys_root will be 'c:\\'
  .resolve('/')
  // It is weird that sometime the disk name of windows is lowercase, sometime uppercase
  .toLowerCase();

function _package_root (dir, options, callback) {
  if (!dir || dir.toLowerCase() === SYS_ROOT) {
    return callback();
  }

  var file = node_path.join(dir, options.identity_filename);
  fs.exists(file, function (exists) {
    if (exists) {
      return fs.stat(file, function (err, stat) {
        if (err) {
          // undefined
          return callback();
        }

        if (stat.isFile()) {
          return callback(dir);
        }

        _package_root(node_path.dirname(dir), options, callback);
      });
    }

    _package_root(node_path.dirname(dir), options, callback);
  });
};
