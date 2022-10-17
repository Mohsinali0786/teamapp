const express=require('express')
const routes=express.Router()
const {registerUser,loginUser}=require('../controllers/authController')
routes.post('/signup',registerUser)
routes.post('/login',loginUser)

module.exports = routes
