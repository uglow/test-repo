// Common style rules

module.exports = {

  rules: {

    // specify whether double or single quotes should be used (includes back-ticks)
    'quotes': ['error', 'single', {
      'allowTemplateLiterals': true
    }],

    // disallow use of multi-line strings
    'no-multi-str': 'error',

    // disallow trailing commas
    'comma-dangle': ['error', 'never'],

    // require or disallow use of semicolons instead of ASI
    'semi': 'error',

    // requires to declare all vars on top of their containing scope
    'vars-on-top': 'off',

    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': 'off'

  }
};
