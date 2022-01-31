module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    // 'react/react-in-jsx-scope': 'off',
    // 'react/jsx-no-undef': 'off'
  },
};
