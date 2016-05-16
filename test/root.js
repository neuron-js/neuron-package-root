'use strict';

var expect = require('chai').expect;
var config = require('../');
var node_path = require('path');

var root = node_path.join(__dirname, 'fixtures');
var dir = root;

describe("config.root()", function(){
  [
    [__dirname],
    [dir, root],
    [dir = node_path.join(dir, 'a'), root],
    [dir = node_path.join(dir, 'b'), root],
    [dir = node_path.join(dir, 'c'), root]
  ].forEach(function (c) {
    it(c[0], function(done){
      config.root(c[0], function (root) {
        expect(root).to.equal(c[1]);
        done();
      });
    });
  });
});


describe("config.read()", function(){
  [
    [__dirname],
    [dir, root],
    [dir = node_path.join(dir, 'a'), root],
    [dir = node_path.join(dir, 'b'), root],
    [dir = node_path.join(dir, 'c'), root]
  ].forEach(function (c) {
    it(c[0], function(done){
      var _root = c[1];
      config.read(c[0], function (err, settings) {
        if (!_root) {
          expect(err).not.to.equal(null);
          return done();
        }

        expect(err).to.equal(null);

        var result = {}
        result.src = settings.src
        result.dist = settings.dist
        result.release = settings.release
        result.root = settings.root

        expect(result).to.deep.equal({
          src: root + '/a',
          dist: root + '/b',
          release: root + '/c',
          root: root
        });
        done();
      });
    });
  });
});

