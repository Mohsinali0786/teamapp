const moongoose=require('mongoose')
const { STRING_REQUIRED, STRING, BOOLEAN_DEFAULT,ARRAY_STRING} = require('./schematypes')

const teamSchema=moongoose.Schema({
    teamname:STRING_REQUIRED,
    teamemail:STRING_REQUIRED,
    useremail:STRING,
    teammembers:[
        {type: moongoose.Schema.Types.ObjectId,
        ref: "User"}
    ],
    isDeleted: BOOLEAN_DEFAULT,
    isEditable:BOOLEAN_DEFAULT
})

let Team=moongoose.model("Team",teamSchema);
module.exports=Team