module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',
    "plugin:prettier/recommended",
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    ecmaFeatures:  {
      legacyDecorators: true,
      jsx:  true,
    },
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
  rules: {
    "comma-style": [2, "last"],
    "react/prop-types": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
  }
};
