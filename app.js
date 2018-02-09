const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const router = require('./router')

// 初识中间件middleware
// app.use(async (ctx, next) => {
//   const sTime = new Date().getTime()
//   await next()
//   const eTime = new Date().getTime()
//   ctx.response.type = 'text/html'
//   ctx.response.body = '<h1>Hello world!</h1>'
//   console.log(`请求地址：${ctx.path}，响应时间：${eTime - sTime}ms`)
// })
//
// app.use(async (ctx, next) => {
//   console.log('中间件1 do something')
//   await next()
//   console.log('中间件1 end')
// })
//
// app.use(async (ctx, next) => {
//   console.log('中间件2 do something')
//   // await next()
//   console.log('中间件2 end')
// })
//
// app.use(async (ctx, next) => {
//   console.log('中间件3 do something')
//   await next()
//   console.log('中间件3 end')
// })

// 如果不使用koa-router或者其它路由中间件，自己手动实现路由，可以如下：
// app.use(async (ctx, next) => {
//   if (ctx.request.url === '/') {
//     ctx.response.body = '<h1>index page</h1>'
//   } else {
//     await next()
//   }
// })
//
// app.use(async (ctx, next) => {
//   if (ctx.request.url === '/home') {
//     ctx.response.body = '<h1>home page</h1>'
//   } else {
//     await next()
//   }
// })
//
// app.use(async (ctx, next) => {
//   if (ctx.request.url === '/404') {
//     ctx.response.body = '<h1>404 page</h1>'
//   } else {
//     await next()
//   }
// })

app.use(bodyParser())

router(app)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
