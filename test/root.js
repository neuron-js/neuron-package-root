'use strict';

var expect = require('chai').expect;
var package_root = require('../lib/root');
var node_path = require('path');

var root = node_path.join(__dirname, 'fixtures');
var dir = root;

describe("package_root()", function(){
  [
    [__dirname],
    [dir, root],
    [dir = node_path.join(dir, 'a'), root],
    [dir = node_path.join(dir, 'b'), root],
    [dir = node_path.join(dir, 'c'), root]
  ].forEach(function (c) {
    it(c[0], function(done){
      package_root(c[0], function (root) {
        expect(root).to.equal(c[1]);
        done();
      });
    });
  });
});

