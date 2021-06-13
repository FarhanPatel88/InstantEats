module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'always',
                bracketSpacing: true,
                endOfLine: 'auto',
                htmlWhitespaceSensitivity: 'css',
                insertPragma: false,
                jsxBracketSameLine: false,
                jsxSingleQuote: false,
                printWidth: 150,
                proseWrap: 'preserve',
                quoteProps: 'as-needed',
                requirePragma: false,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'es5',
                useTabs: false,
                vueIndentScriptAndStyle: true,
            },
        ],
    },
};
