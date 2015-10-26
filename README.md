[![Build Status](https://travis-ci.org/neuron-js/neuron-package-root.svg?branch=master)](https://travis-ci.org/neuron-js/neuron-package-root)
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/neuron-package-root.svg)](http://badge.fury.io/js/neuron-package-root)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/neuron-package-root.svg)](https://www.npmjs.org/package/neuron-package-root)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/neuron-js/neuron-package-root.svg)](https://david-dm.org/neuron-js/neuron-package-root)
-->

# neuron-package-root

Get the root directory of the current neuron packages from an entry file.

## Install

```sh
$ npm install neuron-package-root --save
```

## Usage

```js
var package_root = require('neuron-package-root');
package_root(dir, function(root){
  console.log(root);
});
```

### package_root(dir [, options], callback)

- dir `path` the absolute path of the entry file
- options `Object`
  - identity_filename: `string=neuron.config.js`
- callback `function(root)` the found `root` will be passed as the only parameter. If package root not found, then `root` will be `undefined`.

## License

MIT
