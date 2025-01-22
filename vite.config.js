import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        target: 'esnext',  // Change target to esnext to support top-level await
    }
});
