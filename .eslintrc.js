module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'plugin:@vue/prettier',
    'plugin:vue/base'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'vue',
    'prettier',
    'html',
    'standard',
  ],
  rules: {
    'generator-star-spacing': 'off',
    'indent': ['error', 2],
    'semi': ["error", "never", { "beforeStatementContinuationChars": "always"}],
    'quotes': ['off', 'single'],
    'no-console': 'off',
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxBOF': 1 }],
    'space-in-parens': ['error', 'never'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-blocks': [
      'error',
      'always'
    ],
    'no-empty': 'error',
    'no-duplicate-imports': 'error'
  },
};
