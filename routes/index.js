const express=require('express')
const routes=express.Router()

routes.use('/auth',require('./auth'))
routes.use('/post',require('./post'))
routes.use('/get',require('./get'))

module.exports=routes