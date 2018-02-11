const path = require('path')
const bodyParser = require('koa-bodyparser')
const staticFiles = require('koa-static')
const nunjucks = require('koa-nunjucks-2')

const miSend = require('./mi-send')
const miLog = require('./mi-log')

module.exports = (app) => {
  app.use(miLog())
  
  app.use(staticFiles(path.resolve(__dirname, '../public')))

  app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
      trimBlocks: true  // 开启转义 防Xss
    }
  }))

  app.use(bodyParser())

  app.use(miSend())
}
