module.exports = {

  rules: {

    // specify the maximum depth that blocks can be nested
    'max-depth': ['error', 3], // 3 deep

    // require the use of === and !==
    'eqeqeq': 'error',

    // disallow use of eval()
    'no-eval': 'error',

    // require use of the second argument for parseInt()
    'radix': 'off',

    // require or disallow Yoda conditions
    'yoda': 'off',

    // require camel case names
    'camelcase': ['error', {
      'properties': 'never'
    }],

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow if statements as the only statement in else blocks
    'no-lonely-if': 'error',

    // No unused variables - http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'error'
  }

};
