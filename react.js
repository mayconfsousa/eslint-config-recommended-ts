module.exports = {
  extends: [require.resolve('./base'), 'plugin:react/recommended'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-hooks'],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', 'module', '/^~/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'warn',
    'react/no-array-index-key': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/self-closing-comp': 'warn',
  },
};
