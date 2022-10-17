const User=require('../models/usermodel')
const bcrypt=require('bcryptjs')

const registerUser = async (req,res)=>{
    try{
        console.log('req.body for users', req.body)
        let { name,email,password} = req.body
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        const UserExist = await User.findOne({ email})

        if (UserExist) {
        }
        else{

            await User.create({
                name,
                email,
                password,
                isDeleted: false
            }).then(() => {
                res.send({ status: 'success', message: 'Congratulations You added your user successfully' })
            }).catch((err) => {

            })
        }
    }
    catch (err) {
        console.log('err', err)
    }
}
module.exports={
    registerUser,
}