const moongoose=require('mongoose')
const { STRING_REQUIRED, BOOLEAN_DEFAULT } = require('./schematypes')

const memberSchema=moongoose.Schema({
    teamname:STRING_REQUIRED,
    memberEmail:STRING_REQUIRED,
    teamowner:STRING_REQUIRED,
})

let Member=moongoose.model("TeamMember",memberSchema);
module.exports=Member