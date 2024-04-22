import vitePluginString from 'vite-plugin-string';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        vitePluginString()
    ],
    resolve: {
        dedupe: ['three']
    },
    root: './',
    base: '/solar-system',
    build: {
        rollupOptions: {
            external: ['three'],
        }
    },
    optimizeDeps: {
        include: ['three']
    },
})