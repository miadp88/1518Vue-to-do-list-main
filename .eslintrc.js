module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ["error", "always"],
    "no-unused-vars": "error",
    "no-console": "warn",
    "no-undef": "error",
    indent: ["error", 2],
    quotes: ["error", "single"],
    "no-trailing-spaces": "error",
    "comma-dangle": ["error", "always-multiline"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-extra-parens": "error",
  },
};
