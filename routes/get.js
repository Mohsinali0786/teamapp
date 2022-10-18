const express=require('express')
const routes=express.Router()
const {getTeams}=require('../controllers/getController')
routes.get('/getteam',getTeams)
module.exports = routes