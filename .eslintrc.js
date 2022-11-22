module.exports = {
  root: true,
  overrides: [
    {
      files: ['./src/**/*.{ts,tsx}', './**/*.js'],
      parser: '@typescript-eslint/parser',
      env: {
        node: true,
        jest: true,
      },
      parserOptions: {
        project: ['./tsconfig.json', './src/client/tsconfig.json'],
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
      ],
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
          },
        ],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'object-shorthand': 'error',
      },
    },
    {
      files: ['./src/server/**/*.graphql'],
      extends: 'plugin:@graphql-eslint/schema-recommended',
      rules: {
        'prettier/prettier': 'error',
        '@graphql-eslint/no-unreachable-types': 'off',
        '@graphql-eslint/strict-id-in-types': 'off',
        '@graphql-eslint/known-argument-names': 'off',
        '@graphql-eslint/known-directives': 'off',
        '@graphql-eslint/known-type-names': 'off',
        '@graphql-eslint/provided-required-arguments': 'off',
        '@graphql-eslint/unique-directive-names-per-location': 'off',
        '@graphql-eslint/require-description': 'off',
        '@graphql-eslint/naming-convention': 'off',
        '@graphql-eslint/no-hashtag-description': 'off',
      },
    },
  ],
}
