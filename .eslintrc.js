module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // "**prettier**"
  ],
  rules: {
    // override/add rules settings here, such as:
    'no-unused-vars': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-explicit-emits': 'off',
  },
};
