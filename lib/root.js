'use strict';

module.exports = package_root;

var node_path = require('path');
var fs = require('fs');

var SYS_ROOT = node_path
  // in windows, sys_root will be 'c:\\'
  .resolve('/')
  // It is weird that sometime the disk name of windows is lowercase, sometime uppercase
  .toLowerCase();

var IDENTITY_FILENAME = 'neuron.config.js';

function package_root (dir, callback) {
  if (!dir || dir.toLowerCase() === SYS_ROOT) {
    return callback();
  }

  var file = node_path.join(dir, IDENTITY_FILENAME);
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

        package_root(node_path.dirname(dir), callback);
      });
    }

    package_root(node_path.dirname(dir), callback);
  });
};
