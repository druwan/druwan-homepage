import js from '@eslint/js'
import ts from 'typescript-eslint'
import astro from 'eslint-plugin-astro'

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...astro.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    }
  }
]
