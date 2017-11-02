module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  env: {
    browser: true
  },
  rules: {
    'arrow-parens': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0
  }
};
