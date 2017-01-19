module.exports = {

  rules: {

    // specify curly brace conventions for all control statements
    "curly": ['error', "all"],

    // enforce one true brace style
    "brace-style": 'error',

    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": 'error',

    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": 'error',

    // enforce operators to be placed before or after line breaks
    "operator-linebreak": ['error', "after"],

    // require or disallow newlines around variable declarations
    "one-var-declaration-per-line": ['error', "initializations"],

    // enforce spacing before and after comma
    "comma-spacing": 'error',

    // disallow or enforce spaces inside of single line blocks
    "block-spacing": 'off',

    // specify the maximum length of a line in your program
    "max-len": ['error', 120, {
      "ignoreComments": true,
      "ignoreUrls": true
    }],

    // require spaces around operators
    "space-infix-ops": 'error',

    // require or disallow space before blocks
    "space-before-blocks": ['error', "always"],

    // Require or disallow spaces before/after unary operators
    "space-unary-ops": 'error',

    // require or disallow space before function opening parenthesis
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "ignore"
    }],

    // enforce newline at the end of file, with no multiple empty lines
    "eol-last": 'error',

    // enforce spacing inside array brackets
    "array-bracket-spacing": ['error', "never"],

    // require or disallow padding inside curly braces
    "object-curly-spacing": ['error', "always"],

    // require or disallow spaces inside parentheses
    "space-in-parens": ['error', "never"],

    // disallow multiple empty lines
    "no-multiple-empty-lines": 'error',

    // enforce spaces after property names in objects
    "key-spacing": ['error', {
      "afterColon": true
    }],

    // require spaces after the following keywords
    "keyword-spacing": ['error', {
      "overrides": {
        "if": { "after": true },
        "else": { "after": true },
        "for": { "after": true },
        "while": { "after": true },
        "do": { "after": true },
        "switch": { "after": true },
        "return": { "after": true },
        "try": { "after": true },
        "catch": { "after": true }
      }
    }]

  }

};
