import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const defaultConfig = {
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },

    test: {
        environment: 'jsdom',
    },
}

export default defineConfig(({ command, mode }) => {
    if (command === 'serve' && mode === 'development') {
        return {
            ...defaultConfig,
            server: {
                host: '0.0.0.0',
            },
        }
    }

    return defaultConfig
})
