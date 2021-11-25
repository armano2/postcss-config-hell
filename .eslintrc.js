module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module',
    extraFileExtensions: ['.ejs']
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 80,
        tabWidth: 2,
        ignoreUrls: true
      }
    ],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    indent: ['warn', 2],
    // indent: ['error', 'tab'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    eqeqeq: ['error', 'smart'],
    'linebreak-style': ['error', 'unix'],
    'no-var': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-expressions': 'warn',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2
      }
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ]
  }
};
