const { teammodel, membersmodel, usermodel } = require('../models')
const User = require('../models/usermodel')
const getTeams = async (req, res) => {
    try {
        const Teams = await teammodel.find({})
        if (Teams) {
            res.send({ status: 'success', Teams })
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

const getMembers = async (req, res) => {
    console.log('hello req.body', req.body.data.email)
    let useremail = req.body.data.email
    try {
        const Members = await teammodel.findOne({ useremail }).populate("teammembers") // key to populate

        if (Members) {
            res.send({ status: 'success', Members })

        }
        else {
            res.send({
                message: "Error in data receiving"
            })
        }
        // .then(user => {
        //     console.log('User poulate', user.teammembers)
        // }).catch((err) => {
        //     console.log('Errrrr', err)
        //     res.send({
        //         message: "Error in data receiving"
        //     })
        // });

    }
    catch (err) {
    console.log('err', err)
}
}


module.exports = {
    getTeams,
    getMembers,
    // getlogginPerson_TeamMember

}