# Overview

The goals are the following:

* Demonstrate a very simple setup with rollup
* that uses typescript as source language
* and creates the 3 different type of target formats (commonjs, es6, umd)
* and use those formats then in simple examples.

## Sources

* Provide functions that are exported.
* Demonstrate how those functions can be used
* Depending on the source format chosen.

## Examples

### `index.js`

This demonstrates the use of the UMD format in the context of node. Do the following:

* Start `node` binary.
* Enter `var hc = require('./lib/bundle')`
* Call the defined function then through `hc.helloChess()`.
* You should see in the console: `Hello chess!`.
