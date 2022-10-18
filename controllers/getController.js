const Team=require('../models/teammodel')
const getTeams= async(req,res)=>{
    try{
        const Teams = await Team.find({})
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

module.exports={
    getTeams,

}