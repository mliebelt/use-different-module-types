# Overview

The goals are the following:

* Demonstrate a setup with rollup where a (Javascript) library is used
* that uses typescript as source language
* and creates the 3 different type of target formats (commonjs, es6, umd)
* and use those formats then in simple examples, that demonstrate the use of the library.

## Sources

* Provide functions that are exported.
* Demonstrate how those functions can be used
* Depending on the source format chosen.

## Examples

### `index.js`

This demonstrates the use of the JS format in the context of node. Do the following:

* Start in a terminal `node index.js`
* You should see as a result the printed board with move `e4` done.

### `index.mjs`

This demonstrates the use of the MJS format in the context of node.  Do the following:

* Start in a terminal `node index.mjs`
* You should see as a result the printed board with move `e4` done.

The difference here is, that you are able to do an `import { helloChess } from './lib/pgn.mjs'` instead of the usual `require`.

### `index.html`

This demonstrates the use of the UMD format in the browser. Do the following:

* Start `http-server` (or any other http server you can run locally).
* Call the URL `http://localhost:8080/index.html`.
* You should get a popup with the board in it. Press ok.

In the `index.html` file, you see how to use the bundle. Both variants should work:

* `window.hc.helloChess()` and
* `hc.helloChess()`

The global hc is defined in the `rollup.config.js` file.
