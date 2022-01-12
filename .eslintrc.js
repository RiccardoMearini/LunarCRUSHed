const WARN = 1, ERR = 2;

module.exports = {
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": { "globalReturn": false },
  },
  "env": {
    "node": true,
    "mocha": true,
  },

  "extends": [ "eslint:recommended" ],


  "rules": {
    // Suggestions
    "no-constructor-return": ERR,
    "default-case": ERR,
    "default-case-last": ERR,
    "guard-for-in": ERR,
    "max-depth": [ ERR, 5 ],
    "max-nested-callbacks": [ ERR, 2 ],
    "no-empty-function": ERR,
    "no-var": ERR,
    "prefer-const": ERR,
    "sort-imports": WARN,
    "yoda": WARN,

    // Formatting
    "array-bracket-newline": [ ERR, { "multiline": true } ],
    "array-bracket-spacing": [ ERR, "always" ],
    "arrow-parens": ERR,
    "arrow-spacing": ERR,
    "brace-style": [ ERR, "1tbs", { "allowSingleLine": true } ],
    "comma-dangle": [ ERR, "always-multiline" ],
    "eol-last": [ ERR, "always" ],
    "indent": [ ERR, 2 ],
    "key-spacing": ERR,
    "max-len": [ ERR, 125 ],
    "newline-per-chained-call": ERR,
    "no-multi-spaces": ERR,
    "no-multiple-empty-lines": ERR,
    "no-tabs": ERR,
    "no-trailing-spaces": ERR,
    "object-curly-newline": [ ERR, { "multiline": true } ],
    "object-curly-spacing": [ ERR, "always" ],
    "object-property-newline": ERR,
    "quotes": [ ERR, "double" ],
    "semi": [ ERR, "always" ],
    "semi-spacing": [
      ERR,
      {
        "before": false,
        "after": true,
      },
    ],
    "semi-style": [ ERR, "last" ],
    "space-infix-ops": ERR,
    "space-in-parens": ERR,
  },
};

