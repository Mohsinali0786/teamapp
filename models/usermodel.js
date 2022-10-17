const moongoose=require('mongoose')
const { STRING_REQUIRED, STRING, BOOLEAN_DEFAULT } = require('./SchemaTypes')

const userSchema=moongoose.Schema({
    name:STRING_REQUIRED,
    email:STRING_REQUIRED,
    password:STRING_REQUIRED,
    isDeleted: BOOLEAN_DEFAULT,
})

let User=moongoose.model("User",userSchema);
module.exports=User