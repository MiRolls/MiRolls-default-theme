// import { defineConfig } from "vite"

// module.exports = {
export default {
    // ...
    optimizeDeps: {
        exclude: ["koa","express"],
    },
    server: {
        proxy: {
            // 将所有 `/api` 请求代理到 `http://localhost:3001`
            "/get": "http://localhost:3001",
            // "/get/*": {
            //     target: 'http://localhost:3001',
            //     changeOrigin: true,
            //     logLevel: 'debug'
            //     rewrite: (path) => path.replace(/^\/get/, '')
            // }
        },
    },
};