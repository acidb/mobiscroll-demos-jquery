module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:es5/no-es2015', 'prettier'],
  ignorePatterns: '/dist',
  plugins: ['es5', 'import', 'promise'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'es5/no-es6-methods': 'off',
    'es5/no-es6-static-methods': ['error', { exceptMethods: ['Object.assign'] }],
    'es5/no-modules': 'off',
    'import/order': ['warn', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    'one-var': ['warn', 'never'],
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
  },
};
