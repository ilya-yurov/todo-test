import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@test/(.*)$': '<rootDir>/src/test/$1',
        '^@shared/(.*)$': '<rootDir>/src/shared/$1'
    },
    setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
};

export default config;
