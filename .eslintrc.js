module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // 'plugin:vue/vue3-recommended'
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'vue/require-default-prop': 'off',
    // 'vue/require-prop-types': 'off',
    // 'vue/require-explicit-emits': 'off'
  }
}
