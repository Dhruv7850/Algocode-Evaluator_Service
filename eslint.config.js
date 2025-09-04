const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
    ...tseslint.configs.recommended,
    {
        rules: {
            'semi': ['error', 'always'],
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },
    {
        // Add the config file itself to the ignore list
        ignores: ['dist', 'node_modules', 'eslint.config.js'],
    }
);