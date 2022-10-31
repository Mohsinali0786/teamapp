const { teammodel } = require('../models')
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
    console.log('hello req.body', req.body)
    const {email}=req.body.LoginUser
    const {teamname}=req.body
    let useremail = email
    try {
        const Members = await teammodel.findOne({ useremail,teamname}).populate("teammembers") // key to populate
        console.log('===>',Members)
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