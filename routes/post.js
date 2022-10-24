const express=require('express')
const routes=express.Router()
const {addTeam,deleteTeam,addMember,getlogginPerson_TeamMember,editTeamName,editTeamEmail}=require('../controllers/postController')

routes.post('/addteam',addTeam)
routes.post('/deleteteam/:id',deleteTeam)
routes.post('/addmember',addMember)

routes.post('/getmemberbyloginuser',getlogginPerson_TeamMember)
routes.post('/editteamname/:id',editTeamName)
routes.post('/editteamemail/:id',editTeamEmail)



module.exports = routes
