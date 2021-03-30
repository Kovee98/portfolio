module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        // allow async-await
        'quote-props': ['error', 'consistent-as-needed'],
        'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0, maxBOF: 0 }],
        'brace-style': ['error', '1tbs'],
        'arrow-spacing': ['error', { before: true, after: true }],
        'keyword-spacing': ['error', { before: true, after: true }],
        'space-before-function-paren': ['error', 'always'],
        'space-before-blocks': ['error', 'always'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'generator-star-spacing': 'off',
        // allow paren-less arrow functions
        'arrow-parens': 'off',
        'no-trailing-spaces': ['error', { skipBlankLines: false }],
        'one-var': ['error', 'never'],
        'quotes': ['error', 'single'],
        'import/first': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'prefer-promise-reject-errors': 'off',
        'prefer-const': 'error',
        'no-var': 'error',
        'no-eval': 'off',
        'operator-linebreak': [2, 'after'],
        // allow console.log during development only
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 4, {
            SwitchCase: 1
        }],
        'vue/no-multiple-template-root': 'off',
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1
        }],
        'vue/valid-template-root': 'off',
        'vue/valid-v-model': 'off',
        'semi': ['error', 'always', { omitLastInOneLineBlock: false }]
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ]
};
