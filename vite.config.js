module.exports = {
    // ...
    server: {
        proxy: {
            // 将所有 `/api` 请求代理到 `http://localhost:3001`
            "/": "http://localhost:3001",
        },
    },
};