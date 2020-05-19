/*
 * @Author: tao 
 * @Date: 2020-05-18 16:33:01 
 * @Last Modified by: tao
 * @Last Modified time: 2020-05-18 18:24:15
 */
const Koa = require('koa')
const mongoose = require('mongoose')
const config = require('./config')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const exampleRouter = require('./routes/exampleRouter')

const app = new Koa()

mongoose.connect(config.db, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (err) {
    console.log('failed to connect to database')
  } else {
    console.log('connecting database successfully')
  }
})
app.use(cors())
app.use(bodyParser())
app.use(exampleRouter.routes()).use(exampleRouter.allowedMethods())

app.listen(config.port)