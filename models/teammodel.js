const moongoose=require('mongoose')
const { STRING_REQUIRED, STRING, BOOLEAN_DEFAULT } = require('./schematypes')

const teamSchema=moongoose.Schema({
    teamname:STRING_REQUIRED,
    teamemail:STRING_REQUIRED,
    useremail:STRING,
    isDeleted: BOOLEAN_DEFAULT,
    isEditable:BOOLEAN_DEFAULT
})

let Team=moongoose.model("Team",teamSchema);
module.exports=Team