module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import', 'react-hooks'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal'],
                'newlines-between': 'always',
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/*.test.ts*', '**/test/**'],
            },
        ],
        'max-len': [
            'error',
            {
                code: 80,
                ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
                ignoreUrls: true,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        '@typescript-eslint/triple-slash-reference': [
            'error',
            { path: 'never', types: 'never', lib: 'never' },
        ],
        'spaced-comment': 'error',
        'no-var': 'error',
        'default-case': 'error',
        'prefer-const': 'error',
        'no-param-reassign': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        'guard-for-in': 'error',
        'no-cond-assign': 'error',
        'constructor-super': 'error',
        'no-duplicate-case': 'error',
        'no-redeclare': 'error',
        'no-sparse-arrays': 'error',
        'dot-notation': 'error',
        'prefer-object-spread': 'error',
        'valid-typeof': 'error',
        'use-isnan': 'error',
        'import/no-duplicates': 'error',
        'arrow-body-style': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
    },
};
