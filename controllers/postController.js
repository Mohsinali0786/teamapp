// const { getTeam } = require('../client/src/utils/helper')
const { teammodel, membersmodel } = require('../models')
const addTeam = async (req, res) => {

    const { teamname, teamemail, useremail } = req.body
    try {
        const TeamExists = await teammodel.findOne({ teamemail, useremail })
        if (TeamExists) {
            if (TeamExists.isDeleted !== true) {
                res.send({ status: 'error', message: 'This team is already exists' })
            }
            else {
                await TeamExists.updateOne({
                    isDeleted: false,
                }).then(() => {
                    res.send({ status: 'success', message: 'Congratulations Team added successfully' })
                }).catch((err) => {
                    console.log('err', err)
                })
            }
        }
        else {
            await teammodel.create({
                teamname,
                teamemail,
                useremail,
                isDeleted: false,
                isEditable: false
            }).then(() => {
                res.send({ status: 'success', message: 'Congratulations Team added successfully' })
            }).catch((err) => {
                console.log('err', err)

            })
        }

    }
    catch (err) {
        console.log('err', err)
    }
}

const deleteTeam = async (req, res) => {
    try {
        const AllTeams = await teammodel.find({})

        const deleteTeam = await teammodel.findByIdAndUpdate(req.params.id, {
            isDeleted: true,
        })
        if (deleteTeam) {
            res.send({
                status: 'success',
                message: 'Your team deleted successfully',
                AllTeams,
            })
        }
        else {
            res.send({
                status: 'error',
                // message: 'Admin are not deleteable',
            })
        }
        // console.log('deleteTeam',deleteTeam)
    }
    catch (err) {
        console.log('err', err)
    }
}
const addMember = async (req, res) => {
    const allmembers = membersmodel.find()
    console.log('body', req.body)
    try {
        const { memberEmail, teamname, teamemail, teamowner } = req.body
        const MemberExists = await membersmodel.findOne({ memberEmail, teamname })
        if (MemberExists) {
            if (MemberExists.isDeleted !== true) {
                res.send({ status: 'error', message: 'This team is already exists' })
            }
            else {
                await MemberExists.updateOne({
                    isDeleted: false,
                }).then(() => {
                    res.send({ status: 'success', message: 'Congratulations Team added successfully', allmembers })
                }).catch((err) => {
                    console.log('err', err)
                })
            }
        }
        else {
            await membersmodel.create({
                teamname,
                teamemail,
                memberEmail,
                teamowner,
                isDeleted: false,
                isEditable: false
            }).then(() => {
                res.send({ status: 'success', message: 'Congratulations Member added successfully' })
            }).catch((err) => {
                console.log('err', err)

            })
        }

    }
    catch (err) {
        console.log('err', err)
    }
}
const getlogginPerson_TeamMember = async (req, res) => {

    const memberEmail = req.body.email
    // let  = email
    console.log('req.body', req.body)
    try {
        
        const Members_in_Teams = await membersmodel.find({memberEmail})
        console.log('mm',Members_in_Teams)
        if (Members_in_Teams) {
            res.send({ status: 'success', Members_in_Teams })
        }
        else {
            res.send({
                message: "Error in data receiving"
            })
        }
    }
    catch (err) {
        console.log('err', err)
    }
}

const editTeamName = async (req, res) => {
    let { inputteamname } = req.body
    let teamname=inputteamname
    console.log('team name:', req.body)
    console.log('team req.params.id:', req.params.id)

    try {
        await teammodel.findByIdAndUpdate(req.params.id, {
            teamname: teamname
        }).then((res) => {
            res.send({
                status: 'success',
                message: 'Your data Updated successfully',
            })
        }).catch((error) => {
            res.send({
                status: 'error',
            })
        })
        // console.log('result', result)

    }
    catch (err) {
        console.log('err', err)
    }
}

module.exports = {
    addTeam,
    deleteTeam,
    addMember,
    getlogginPerson_TeamMember,
    editTeamName,
}
