module.exports = {
  // The extends directive allows composition of configuration files
  extends: [
    '@strv/javascript/environments/nodejs/optional',
    '@strv/javascript/environments/nodejs/v7',
    '@strv/javascript/coding-styles/recommended',
  ],
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'babel-eslint'
}