'use strict'

module.exports = validate

var node_path = require('path')
var make_array = require('make-array')


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
