// ES6 Specific rules

module.exports = {

  rules: {

    // require parens in arrow function arguments
    'arrow-parens': ['error', 'always'],

    // require space before/after arrow function's arrow
    'arrow-spacing': 'error',

    // verify super() callings in constructors
    'constructor-super': 'error',

    // Disallow modifying variables of class declarations
    'no-class-assign': 'error',

    // Disallow duplicate imports
    'no-duplicate-imports': 'warn',

    // Disallow duplicate name in class members
    'no-dupe-class-members': 'error',

    // Prevent use of 'this' before 'super' in constructors
    'no-this-before-super': 'error',

    // Disallow useless computed keys in objects (arr['0'])
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructors
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and de-structured assignments to the same name
    'no-useless-rename': 'error',

    // require let or const instead of var
    'no-var': 'error',

    // Disallow Symbol Constructor
    'no-new-symbol': 'error',

    // Prefer template literals over string concatenation
    'prefer-template': 'error',

    /** -------------- Warnings ---------------- **/

    // Suggest using Reflect methods where applicable
    'prefer-reflect': 'warn',
  
    // Suggest using arrow functions as callbacks
    'prefer-arrow-callback': 'warn'
    
  }

};
