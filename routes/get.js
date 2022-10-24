const express=require('express')
const routes=express.Router()
const {getTeams, getMembers}=require('../controllers/getController')
routes.get('/getteam',getTeams)
routes.post('/getmembers',getMembers)

// routes.get('/getmemberbyloginuser',getlogginPerson_TeamMember)

module.exports = routes