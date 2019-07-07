module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    "plugin:prettier/recommended",
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    "comma-style": [2, "last"],
    "react/prop-types": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
  }
};
