import type { Config } from 'jest';
import { compilerOptions } from './tsconfig.json';
import { pathsToModuleNameMapper } from 'ts-jest';

const config: Config = {
    rootDir: '.',
    testMatch: ['<rootDir>/test/**/*.spec.ts'],

    moduleFileExtensions: ['ts', 'js', 'json'],
    transform: { '^.+\\.ts$': 'ts-jest' },
    testEnvironment: 'node',

    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),

    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,js}',
        '!<rootDir>/src/main.ts'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
};

export default config;
