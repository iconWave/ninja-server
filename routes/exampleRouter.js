const Router = require('koa-router')
const router = new Router()
const exampleController = require('./../app/controllers/exampleController')

//为控制器的方法定义请求路径和请求方式
router.get('/example/get', exampleController.getExample)
router.post('/example/post', exampleController.postExample)

module.exports = router