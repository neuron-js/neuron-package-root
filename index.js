'use strict';


var node_path = require('path');
var fs = require('fs');
var package_root = require('./lib/root');
var validate = require('./lib/validate');

exports.root = package_root;
exports.read = read;
exports.validate = validate;


function read (dir, callback) {
  package_root(dir, function (root) {
    if (!root) {
      var message = 'neuron.config.js not found up from "' + dir + '"';
      return callback(new Error(message));
    }

    var config_file = node_path.join(root, options.identity_filename);
    var config = require(config_file);

    validate(config, root, callback);
  });
}
