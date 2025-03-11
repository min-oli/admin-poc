const importRules = require('./rules/import.js');
const javascriptRules = require('./rules/javascript.js');
const reactRules = require('./rules/react.js');
const typescriptRules = require('./rules/typescript.js');

/** @type {import('eslint').ESLint.ConfigData} */
const eslintConfig = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ['react', 'react-hooks', 'import', 'unused-imports', '@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    projects: './tsconfig.base.json',
  },
  parser: '@typescript-eslint/parser',
  rules: {
    ...importRules,
    ...javascriptRules,
    ...reactRules,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        ...typescriptRules,
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
};

module.exports = eslintConfig;
