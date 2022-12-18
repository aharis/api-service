module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "import/prefer-default-export": "off",
    "no-underscore-dangle":  "off",
    "max-classes-per-file": "off",
    "max-len": "off",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "default-param-last" : "off",
    "import/no-cycle": "off",
    "no-useless-escape": "off"
  }

}
