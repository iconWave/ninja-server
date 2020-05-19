/*
 * @Author: tao 
 * @Date: 2020-05-18 17:06:30 
 * @Last Modified by: tao
 * @Last Modified time: 2020-05-18 18:56:07
 */
const ExampleCol = require('./../models/example')

// get 请求返回所有数据
const getExample = async (ctx, next) => {
  const req = ctx.query
  const { name = '', password = '' } = req || {}
  console.log(req)
  const examples = await ExampleCol.find({ name, password }, { _id: 0 })
  ctx.status = 200
  ctx.body = {
    msg: 'request success',
    code: 1,
    data: examples || {}
  }
}

// post 插入一条数据
const postExample = async (ctx, next) => {
  const req = ctx.request.body
  const { name ='', password = '' } = req
  
  if(typeof name !== 'string' || !name) {
    ctx.status = 401
    ctx.body = {
      msg: 'request fail',
      code: 10000,
      data: `paramter error!! msg:${req.name}`
    }
    return
  } else if (typeof password !== 'string' || !password) {
    ctx.status = 401
    ctx.body = {
      msg: 'request fail',
      code: 10000,
      data: `paramter error!! msg:${req.password}`
    }
    return
  }

  const result = await ExampleCol.create({ name, password})

  ctx.body = {
    msg: 'post success',
    code: 1,
    data: result
  }
}

// 暴露出这两个方法，在路由中使用
module.exports = {
  getExample,
  postExample
}