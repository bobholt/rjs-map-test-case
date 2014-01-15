# Reduced Test Case for Map Config r.js build

## Setup

* Clone this repo
* `cd` into the repo directory
* `npm install -g requirejs`
* r.js -o build/build.js
* Running a local server, load both index.html and index-built.html

The unbuilt version correctly maps `'lodash'` to `'underscore'`, however this configuration is dropped in the r.js build process.

## Files

This is as reduced a test case as I could come up with. The directory structure is as follows

-/
--build/
---build.js
---require.js
--src/
---templates/
----template.html
---main.js
--vendor/
---loader.js
---lodash.underscore.js
--app.js
--config.js
--index-built.html
--index.html
--README.md