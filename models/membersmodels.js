const moongoose=require('mongoose')
const { STRING_REQUIRED, BOOLEAN_DEFAULT,ARRAY_STRING } = require('./schematypes')

const memberSchema=moongoose.Schema({
    teamname:STRING_REQUIRED,
    teamemail:STRING_REQUIRED,
    memberEmail:STRING_REQUIRED,
    teamowner:STRING_REQUIRED,
    teammembers:ARRAY_STRING,
})

let Member=moongoose.model("TeamMember",memberSchema);
module.exports=Member