const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  const sTime = new Date().getTime()
  await next()
  const eTime = new Date().getTime()
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>Hello world!</h1>'
  console.log(`请求地址：${ctx.path}，响应时间：${eTime - sTime}ms`)
})

app.use(async (ctx, next) => {
  console.log('中间件1 do something')
  await next()
  console.log('中间件1 end')
})

app.use(async (ctx, next) => {
  console.log('中间件2 do something')
  // await next()
  console.log('中间件2 end')
})

app.use(async (ctx, next) => {
  console.log('中间件3 do something')
  await next()
  console.log('中间件3 end')
})

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
