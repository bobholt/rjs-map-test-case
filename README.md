# Reduced Test Case for Map Config r.js build

## Problem
In optimizing an application with RequireJS/r.js 2.1.10, the `map` require configuration option does not appear to hold through the r.js process.

In this test case, I am using a require.js plugin that has a hard dependency on 'lodash'. Elsewhere in my hypothetical application, I will have other modules that have a hard dependency on 'underscore'. I rectify the usage of 2 names for the same library through the `map` configuration option.

In the non-optimized version, the `map` option works, and the application runs.

In the optimized version, `map` is no longer in effect. The r.js build completes, but in loading the application, we see a script error on `lodash.js`.

If I change the hard dependency in the plugin to `underscore`, everything works fine, though this isn't a sustainable fix.

If I were to reverse the naming ('lodash' in `paths`, and map 'underscore' to 'lodash'), the same error occurs.

## Setup

* Clone this repo
* `cd` into the repo directory
* `npm install -g requirejs`
* `r.js -o build/build.js`
* Running a local HTTP server, load both index.html and index-built.html

The unbuilt version correctly maps `'lodash'` to `'underscore'`, however this configuration is dropped in the r.js build process.

## Files

This is as reduced a test case as I could come up with. The directory structure is as follows

```
/
../build
....build.js
....require.js
../src
..../templates
......template.html
....main.js
../vendor
....loader.js
....lodash.underscore.js
..app.js
..config.js
..index-built.html
..index.html
..README.md
```

* `build/build.js` - optimization configuration for r.js (used in `r.js -o build/build.js`)
* `build/require.js` - require library used as the script include in `index.html` and `index-build.html`
* `src/templates/template.html` - template to be compiled by `loader.js` and placed on the page by `main.js`
* `src/main.js` - main JS file. It is 'depped' in by `config.js`
* `vendor/loader.js` - loader require.js plugin. Has a hard dependency on 'lodash'
* `vendor/loadsh.underscore.js` - underscore-compat build of lodash
* `app.js` - r.js output. Used by the `data-main` in `index-built.html`
* `config.js` - requirejs configuration - includes `map` config option
* `index-built.html` - renders the r.js-optimized application
* `index.html` - renders the non-optimized application
* `README.md` - this file
