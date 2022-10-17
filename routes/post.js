const express=require('express')
const routes=express.Router()
const {addTeam}=require('../controllers/postController')
routes.post('/addteam',addTeam)
module.exports = routes
