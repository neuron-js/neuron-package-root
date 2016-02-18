'use strict'


var node_path = require('path')
var fs = require('fs')
var package_root = require('./lib/root')
var validate = require('./lib/validate')

exports.root = package_root
exports.read = read
exports.read_file = read_file
exports.validate = validate


function read (dir, callback) {
  package_root(dir, function (root) {
    if (!root) {
      var message = 'neuron.config.js not found up from "' + dir + '"'
      return callback(new Error(message))
    }

    var config_file = node_path.join(root, package_root.IDENTITY_FILENAME)
    read_file(config_file, callback)
  })
}


function read_file(file, callback) {
  try {
    var config = require(file)
  } catch(e) {
    e.message = 'could not read config file "' + file + '": ' + e.message
    return callback(e)
  }

  var root = node_path.dirname(file)

  // `config.root` is the root path of the project,
  // i.e. the directory which contains neuron.config.js
  config.root = root

  validate(config, root, callback)
}
