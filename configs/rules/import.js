const importRules = {
  'import/extensions': ['off'],
  'import/first': ['error'],
  'import/named': ['error'],
  'import/no-duplicates': ['error'],
  'import/no-extraneous-dependencies': ['off'],
  'import/no-named-as-default': ['off'],
  'import/no-relative-packages': ['off'],
  'import/no-self-import': ['error'],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
      pathGroups: [
        {
          pattern: '@*/**',
          group: 'external',
          position: 'after',
        },
      ],
      pathGroupsExcludedImportTypes: [],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'never',
    },
  ],
  'unused-imports/no-unused-imports': ['error'],
  '@typescript-eslint/naming-convention': ['off'],
};

module.exports = importRules;
