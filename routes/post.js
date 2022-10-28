const express = require('express')
const routes = express.Router()
const { addTeam, deleteTeam, addMember, getlogginPerson_TeamMember, editTeamName, editTeamEmail, uploadImage } = require('../controllers/postController')
// const multer = require('multer')

// const mult = multer({
//     storage: multer.memoryStorage()
//     // dest:'/upload'
// })
routes.post('/addteam', addTeam)
routes.post('/deleteteam/:id', deleteTeam)
routes.post('/addmember', addMember)

routes.post('/getmemberbyloginuser', getlogginPerson_TeamMember)
routes.post('/editteamname/:id', editTeamName)
routes.post('/editteamemail/:id', editTeamEmail)
// routes.post('/uploadimage', mult.single('file'), uploadImage)

routes.post('/uploadimage', uploadImage)




module.exports = routes
