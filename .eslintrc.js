module.exports = {
    extends: [
      'next/core-web-vitals',
      'eslint:recommended'
    ],
    parserOptions: {
      babelOptions: {
        presets: [require.resolve('next/babel')]
      }
    },
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off'
    }
  };