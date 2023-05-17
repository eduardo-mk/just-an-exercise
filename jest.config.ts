export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    roots: ['./src'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '^.+\\.(css|less|scss|sass)$': 'jest-transform-css',
    },
}
