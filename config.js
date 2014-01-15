require.config({

  baseUrl: './',

  deps: ['src/main'],

  map: {
    '*': {
      'lodash': 'underscore'
    }
  },

  paths: {
    'underscore': 'vendor/lodash.underscore',
    'tmpl': 'vendor/loader'
  }

});