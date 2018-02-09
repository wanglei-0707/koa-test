const HomeService = require('../service/home')

module.exports = {
  index: async (ctx, next) => {
    await ctx.render('home/index', {
      title: 'iKcamp欢迎您'
    })
  },
  home: async (ctx, next) => {
    console.log('query: ', ctx.request.query)
    console.log('querystring：', ctx.request.querystring)
    ctx.response.body = '<h1>home page</h1>'
  },
  homeParams: async (ctx, next) => {
    const params = ctx.params
    console.log('params:', params)
    ctx.response.body = `<h1>home ${params.id} ${params.name} page </h1>`
  },
  login: async (ctx, next) => {
    await ctx.render('home/login', {
      btnName: 'GO'
    })
  },
  register: async (ctx, next) => {
    const { name, password } = ctx.request.body
    const res = await HomeService.register(name, password)
    console.log('res', res, typeof res.status)
    if (res.status === -1) {
      await ctx.render('home/login', res.data)
    } else {
      ctx.state.title = '个人中心'
      await ctx.render('home/success', res.data)
    }
  }
}
