module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'hotfix',
                'test',
                'docs',
                'chore',
                'refactor',
                'style',
                'ci',
                'perf'
            ]
        ],
        'type-empty': [2, 'never'],     // no permite commits sin tipo
        'subject-empty': [2, 'never'],  // no permite commits sin mensaje después de `:`
    },
};
