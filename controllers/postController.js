// const { getTeam } = require('../client/src/utils/helper')
const { teammodel, membersmodel, usermodel } = require('../models')
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
        let email=memberEmail
        // const MemberExists = await usermodel.findOne({ memberEmail, teamname })
        const MemberExists = await usermodel.findOne({ email})

        console.log('MemberExists', MemberExists)

        if (MemberExists) {
            console.log('MemberExists IDD', MemberExists._id.toString())
            // if (MemberExists.isDeleted !== true) {
            //     res.send({ status: 'error', message: 'This team is already exists' })
            // }
            // else {
            //     await MemberExists.updateOne({
            //         isDeleted: false,
            //     }).then(() => {
            //         res.send({ status: 'success', message: 'Congratulations Team added successfully', allmembers })
            //     }).catch((err) => {
            //         console.log('err', err)
            //     })
            // }
            const isTeamExist = await teammodel.findOne({ teamname })
            console.log('isTeamExist', isTeamExist._id.toString())

            if (isTeamExist) {
                getId = isTeamExist._id.toString()
                console.log('getId',getId)
                await teammodel.findByIdAndUpdate(getId, {
                    $push: { teammembers: MemberExists._id.toString() }
                }).then(() => {
                    res.send({ status: 'success', message: 'Congratulations Member added successfully' })
                }).catch((err) => {
                    console.log('err', err)

                })
            }
            else {
                res.send({ status: 'error', message: 'Team not exist' })

            }
            // await teammodel.create({
            //     teamemail,
            //     teamname,
            //     teammembers:[MemberExists._id.toString()],
            // }).then(() => {
            //     res.send({ status: 'success', message: 'Congratulations Member added successfully' })
            // }).catch((err) => {
            //     console.log('err', err)

            // })
        }
        else {
            res.send({ status: 'error', message: 'User not exist' })

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

        let Members_in_Teams = await teammodel.find().populate('teammembers')
        console.log('mm', Members_in_Teams)
        if(Members_in_Teams.teammembers.filter((v)=>v.email===memberEmail))
        {
            console.log('mm_mm', Members_in_Teams.teamname)
        }
   
        // Members_in_Teams=Members_in_Teams.teammembers.filter((v)=>v.email===memberEmail)

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
    let teamname = inputteamname
    console.log('team name:', req.body)
    console.log('team req.params.id:', req.params.id)

    try {
        await teammodel.findByIdAndUpdate(req.params.id, {
            teamname: teamname,
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

    }
    catch (err) {
        console.log('err', err)
    }
}
const editTeamEmail = async (req, res) => {
    let { inputteamname } = req.body
    let teamemail = inputteamname
    console.log('team name:', req.body)
    console.log('team req.params.id:', req.params.id)
    console.log('teamemail:', teamemail)


    try {
        await teammodel.findByIdAndUpdate(req.params.id, {
            teamemail: teamemail,
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
    editTeamEmail,
}
