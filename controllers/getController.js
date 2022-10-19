const {teammodel,membersmodel}=require('../models')
const getTeams= async(req,res)=>{
    try{
        const Teams = await teammodel.find({})
        if (Teams) {
            res.send({ status: 'success', Teams})
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

const getMembers= async(req,res)=>{
    try{
        const Members = await membersmodel.find({})
        if (Members) {
            res.send({ status: 'success', Members})
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


module.exports={
    getTeams,
    getMembers,
    // getlogginPerson_TeamMember

}