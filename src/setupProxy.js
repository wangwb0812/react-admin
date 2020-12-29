const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/myapi', {
      target: 'http://1.1.1.1:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/myapi': ''
      }
    })
  )
  app.use(
    createProxyMiddleware('/opt', {
      target: 'https://www.baidu.com',
      changeOrigin: true,
      pathRewrite: {
        '^/opt': ''
      }
    })
  )
}