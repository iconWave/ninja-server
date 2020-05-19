/*
 * @Author: tao 
 * @Date: 2020-05-18 16:48:39 
 * @Last Modified by: tao
 * @Last Modified time: 2020-05-18 17:24:21
 */
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const exampleSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
}, {
  collation: 'example',  // 避免新建的表名带上 s 后缀
  versionKey: false  // 不需要 __v字段，_v字段是默认添加
})

module.exports = mongoose.model('example', exampleSchema)