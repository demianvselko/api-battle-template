module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',     // nueva funcionalidad
                'fix',      // bug fix
                'hotfix',   // fix crítico en prod
                'test',     // agregar o corregir tests
                'docs',     // cambios en documentación
                'chore',    // mantenimiento (deps, configs)
                'refactor', // refactor sin cambiar comportamiento
                'style',    // formato, puntos y comas, etc.
                'ci',       // cambios en CI/CD
                'perf'      // mejoras de performance
            ]
        ],
        'type-empty': [2, 'never'],
        'subject-empty': [2, 'never'],
    },
};
