const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')

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

// 添加路由
router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>index page</h1>'
})

router.get('/home', async (ctx, next) => {
  console.log('query: ', ctx.request.query)
  console.log('querystring：', ctx.request.querystring)
  ctx.response.body = '<h1>home page</h1>'
})

router.get('/404', async (ctx, next) => {
  ctx.response.body = '<h1>404 page</h1>'
})

router.get('/home/:id/:name', async (ctx, next) => {
  const params = ctx.params
  console.log('params:', params)
  ctx.response.body = `<h1>home ${params.id} ${params.name} page </h1>`
})

router.get('/user', async (ctx, next) => {
  ctx.response.body =
  `
    <form action='/user/register' method='post'>
      <input name='name' type='text' placeholder='请输入用户名：wl'>
      <br>
      <input name='password' type='text' placeholder='请输入密码：123'>
      <br>
      <button>GO</button>
    </form>
  `
})

router.post('/user/register', async (ctx, next) => {
  const { name, password } = ctx.request.body
  if (name === 'wl' && password === '123') {
    ctx.response.body = `Hello, ${name}!`
  } else {
    ctx.response.body = '登陆账号有误！'
  }
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
