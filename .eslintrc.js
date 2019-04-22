module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'camelcase': 2,
    'keyword-spacing': 1,
    'comma-spacing': 1,
    // 'space-before-blocks': 1,
    // 'spaced-comment': 1,
    // 'key-spacing': [
    //   'error',
    //   {
    //     'beforeColon': false
    //   }
    // ],
    // 'no-multi-spaces': 'error',
    // 'space-in-parens': [
    //   'error',
    //   'always'
    // ],
    // // 'space-before-function-paren': [
    // //   'error',
    // // ],
    // 'func-call-spacing': [
    //   'error',
    //   'never'
    // ],
    // 'no-multiple-empty-lines':
    //   'error',
  }
};