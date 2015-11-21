[![Build Status](https://travis-ci.org/neuron-js/neuron-project-config.svg?branch=master)](https://travis-ci.org/neuron-js/neuron-project-config)
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/neuron-project-config.svg)](http://badge.fury.io/js/neuron-project-config)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/neuron-project-config.svg)](https://www.npmjs.org/package/neuron-project-config)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/neuron-js/neuron-project-config.svg)](https://david-dm.org/neuron-js/neuron-project-config)
-->

# neuron-project-config

Get the configurations of neuron project from an entry directory.

## Install

```sh
$ npm install neuron-project-config --save
```

## Usage

If the directory structure is:

```
/path/to
       |-- neuron.config.js
       |-- a
           |-- b
               |-- a.js
```

```js
var config = require('neuron-project-config');
config.read('/path/to/a/b', function(err, json){
  console.log(json); // The santitized and resolved exports of neuron.config.js
});
```

### config.read(dir, callback)

### config.root(dir, callback)

### config.validate(dir, root, callback);


- dir `path` the absolute path of the entry file
- callback `function(root)` the found `root` will be passed as the only parameter. If package root not found, then `root` will be `undefined`.


## License

MIT
