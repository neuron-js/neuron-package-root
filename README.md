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

**ALWAYS** use this module to loop up and `read neuron.config.js`

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
config.read('/path/to/a/b', function(err, conf){
  console.log(conf); // The santitized and resolved exports of neuron.config.js
});
```

### config.read(dir, callback)

- **callback** `function(err, conf)`

Looks `neuron.config.js` up from `dir`, reads and `config.validate` the configurations. If not found, an error will pass into the `callback`.

### config.root(dir, callback)

- callback `function(root)` the found `root` will be passed as the only parameter. If package root not found, then `root` will be `undefined`.

### config.validate(conf, root, callback);

- conf `Object` 
- root `path` the root path of the project

Validates and resolves the value of the `conf`

## License

MIT
