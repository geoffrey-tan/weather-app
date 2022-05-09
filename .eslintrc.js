module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['**/*'],
      extends: ['prettier'],
    },
  ],
  rules: {},
}
