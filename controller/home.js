const HomeService = require('../service/home')

module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = '<h1>index page</h1>'
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
    const data = await HomeService.register(name, password)
    ctx.response.body = data
  }
}
