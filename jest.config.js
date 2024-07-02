const path = require('path');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': ['ts-jest',
            {
                babel: true,
                tsconfig: './tsconfig.app.json',
            }
        ]
    },
    moduleNameMapper: {
        '^common/(.*)$': '<rootDir>/src/common/$1'
    },
    setupFilesAfterEnv: [path.resolve(__dirname, './src/setupTests.ts')]
}