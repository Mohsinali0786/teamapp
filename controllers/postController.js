const Team = require('../models/teammodel')

const addTeam = async (req, res) => {

    const { teamname, teamemail, useremail } = req.body
    try {
        const TeamExists = await Team.findOne({ teamemail })
        if (TeamExists) {
            res.send({ status: 'error', message: 'This team is already exists' })
        }
        else {

            await Team.create({
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
        // const AllTeams = await Team.find({})

        const deleteTeam = await Team.findByIdAndUpdate(req.params.id,{
            isDeleted:true,
        })
        if(deleteTeam){
            res.send({
                status: 'success',
                message: 'Your team deleted successfully',
                // AllTeams,
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
module.exports = {
    addTeam,
    deleteTeam,
}
