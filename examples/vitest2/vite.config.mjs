// It makes no difference wether we use `require` or `import` statements here
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const defaultConfig = {
    plugins: [react()],

    test: {
        globals: true,
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
