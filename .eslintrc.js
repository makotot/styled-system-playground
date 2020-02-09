module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    'import/resolver': {

      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },

      alias: {
        map: [
          ['~', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'semi': ["error", "never"],
    'template-curly-spacing': ['error', 'always'],

    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      aspects: ['invalidHref', 'preferButton'],
    }],

    'import/prefer-default-export': ['off'],

    'react/jsx-filename-extension': ['error', {
      extensions: ['.tsx'],
    }],

    'react/jsx-curly-spacing': ['error', {
      when: 'always',
    }],

    'react/prop-types': ['off'],
    'react/no-array-index-key': ['off'],

    'import/extensions': ['off'],
  },
};
