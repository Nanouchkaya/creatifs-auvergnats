module.exports = {
  "globals": {
    __PATH_PREFIX__: true,
  },
  "extends": [
    "react-app",
    "eslint:recommended",
    "plugin:prettier/recommended"
],
  "env": {
    "browser": true
  },
  "rules": {
    "brace-style": ["error", "stroustrup"],
    "no-param-reassign": ["error", { "props": false }],
    "no-mixed-operators": ["error", { "allowSamePrecedence": true }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off",
    "react/no-access-state-in-setstate": "warn",
    "react/jsx-one-expression-per-line": "off",
    "react/destructuring-assignment": "warn",
    "react/no-unescaped-entities": "off",
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": "off",
    "no-underscore-dangle": "off"
  },
}