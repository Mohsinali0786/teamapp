const express=require('express')
const routes=express.Router()
const {addTeam,deleteTeam,addMember,getlogginPerson_TeamMember,editTeamName}=require('../controllers/postController')

routes.post('/addteam',addTeam)
routes.post('/deleteteam/:id',deleteTeam)
routes.post('/addmember',addMember)

routes.post('/getmemberbyloginuser',getlogginPerson_TeamMember)
routes.post('/editteamname/:id',editTeamName)


module.exports = routes
