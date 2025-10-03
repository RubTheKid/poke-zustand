import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./src/test/setupTest.ts'],
        exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**', '**/*.e2e.spec.ts'],
        coverage: {
            provider: 'v8', // usa c8
            reporter: ['text', 'lcov'],
            all: true,
            include: ['src/**/*.{ts,tsx}'],
            exclude: [
                'src/main.tsx',
                'src/**/__tests__/**',
                'src/test/**',
                '**/*.d.ts',
                '**/e2e/**',
            ],
            thresholds: {
                statements: 70,
                branches: 70,
                functions: 70,
                lines: 70,
            },
        },
    },
})