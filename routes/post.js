const express=require('express')
const routes=express.Router()
const {addTeam,deleteTeam}=require('../controllers/postController')
routes.post('/addteam',addTeam)
routes.post('/deleteteam/:id',deleteTeam)
module.exports = routes
