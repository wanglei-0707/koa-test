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
  },
  register: async (ctx, next) => {
    const { name, password } = ctx.request.body
    const data = await HomeService.register(name, password)
    ctx.response.body = data
  }
}
