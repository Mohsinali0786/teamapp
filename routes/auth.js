const express=require('express')
const routes=express.Router()
const {registerUser}=require('../controllers/authController')
routes.post('/signup',registerUser)

module.exports = routes
