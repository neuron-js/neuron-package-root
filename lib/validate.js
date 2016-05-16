'use strict'

module.exports = validate

var node_path = require('path')
var make_array = require('make-array')
var minimatch = require('minimatch')
var util = require('util')


function validate (config, root, callback) {
  function resolve(path) {
    return node_path.resolve(root, path)
  }

  ;[
    'src',
    'dist',
    'release'
  ].forEach(function (key) {
    config[key] = resolve(config[key])
  })

  config.compilers = config.compilers || []
  config.compilers.forEach(function (compiler){
    var test = compiler.test

    if (util.isString(test)){
      compiler.test = minimatch.makeRe(test)
    }
  })

  function done() {
    config.resolve = resolve
    callback(null, config)
  }

  var server = config.server
  if (!server) {
    return done()
  }

  server.routes = make_array(server.routes)
  server.routes.forEach(function (route) {
    if (!route.root) {
      return
    }

    route.root = make_array(route.root).map(resolve)
  })

  done()
}
