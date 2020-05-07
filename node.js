module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2020: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['import-helpers'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^express/', 'module', '/^~/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'object-shorthand': ['error', 'always'],
  },
};
