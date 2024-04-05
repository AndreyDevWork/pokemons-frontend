/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  settings: {
    "import/resolver": {
      typescript: {}
    },
  },
  overrides: [
    {
      files: [
        'e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:playwright/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
  },
}
