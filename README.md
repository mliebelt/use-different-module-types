# use-different-module-types

Playground to build a build process that allows different modules and usages of those modules.

## What is interesting here?

* I want to use libraries, that should be seemlessly included into the final bundle.
* I want to have parts that work (only) in node.js, and parts that work only in the browser.
* I want to understand how to combine them then.
* I want to ensure that the source format (typescript) is all the time the same, independent of the target.

## Setup

Because I want to have different examples, I have created sub-modules that should be as independent as possible. The only exception is, that I want to use for all of them the same dependencies, so those are kept in the root.

All modules should provide

* a `README.md` file that explains what can be found.
* a `src` folder that includes the sources (only)
* some `target` folders (different names used, hopefully consistent)that contain the result of the compilation
* some `example` files at the top level that use the target files and demonstrate how they can be used.
  * CommonJS/Node: `js` files that require the created target, and demonstrate, that it works.
  * MJS: `mjs` files that import the created target, and demonstrate, that it works.
  * Browser/UMD: `html` file, so you should be able to use `http-server` to start a local web server. The result of the function usage should be visible then.
* One `package.json` file that defines the build process, and depending on the tools used (tsc, rollup, webpack) additional configuration files.
