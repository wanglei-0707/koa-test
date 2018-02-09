module.exports = {
  register: async (name, pwd) => {
    let data
    if (name === 'wl' && pwd === '123') {
      data = `Hello, ${name}!`
    } else {
      data = '登陆账号有误！'
    }
    return data
  }
}
