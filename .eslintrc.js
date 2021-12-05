module.exports = {
  'root': true,
  'env': {
    'node': true,
    'jest': true
  },
  'extends': [
    'eslint:recommended',
  ],
  'plugins': ['@typescript-eslint' ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
  },
  'rules': {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error' ],
    'no-console': 'off',
    'no-debugger': 'warn',
    'no-await-in-loop': 1,
    'require-atomic-updates': 'warn',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'complexity': ['warn', { max: 10 } ],
    'curly': ['warn', 'all' ],
    'default-param-last': 'error',
    'dot-location': ['error', 'property' ],
    'dot-notation': ['error', { 'allowPattern': 'id' } ],
    'eqeqeq': ['error', 'smart' ],
    'guard-for-in': 'off',
    'max-classes-per-file': ['error', 1 ],
    'no-alert': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'warn',
    'no-multi-spaces': 'error',
    'no-multi-str': 'warn',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-self-compare': 'error',
    'no-useless-return': 'error',
    'no-shadow': 'error',
    'camelcase': 'error',
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'only-multiline',
      'exports': 'always',
      'functions': 'never',
    } ],
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    'consistent-this': ['error', 'that' ],
    'func-call-spacing': ['error', 'never' ],
    'function-call-argument-newline': ['error', 'consistent' ],
    'implicit-arrow-linebreak': ['error', 'beside' ],
    'indent': ['error', 2 ],
    'jsx-quotes': ['error', 'prefer-single' ],
    'key-spacing': [
      'error',
      {
        'afterColon': true,
        'mode': 'strict',
      },
    ],
    'keyword-spacing': ['error', { before: true } ],
    'max-len': [
      'error',
      {
        'code': 120,
        'tabWidth': 2,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignorePattern':
        '((import|require) (.*?))|((.*?)\\((.*?)\\): (.*?) \\{)',
      },
    ],
    'max-lines': ['error', 600 ],
    'max-lines-per-function': [
      'error',
      {
        'max': 40,
        'skipBlankLines': true,
        'skipComments': true,

      },
    ],
    'max-nested-callbacks': ['error', 3 ],
    'new-parens': 'error',
    'no-multi-assign': 'error',
    'no-trailing-spaces': [
      'error',
      {
        'skipBlankLines': true,
        'ignoreComments': true,
      },
    ],
    'object-curly-spacing': ['error', 'always' ],
    'padded-blocks': ['error', 'never' ],
    'quotes': ['error', 'single', { allowTemplateLiterals: true } ],
    'semi': ['error', 'never' ],
    'semi-style': ['error', 'last' ],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'yoda': 'error',
  },
  'overrides': [
    {
      'files': [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      'env': { jest: true },
    },
  ],
}
