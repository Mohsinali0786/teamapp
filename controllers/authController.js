const { usermodel } = require('../models')
const bcrypt = require('bcryptjs')

const registerUser = async (req, res) => {
    try {
        console.log('req.body for users', req.body)
        let { name, email, password } = req.body
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        const UserExist = await usermodel.findOne({ email })

        if (UserExist) {
            res.send({ status: 'error', message: 'This email is already exists' })
        }
        else {
            await usermodel.create({
                name,
                email,
                password,
                isDeleted: false
            }).then(() => {
                res.send({ status: 'success', message: 'Congratulations You signup successfully' })
            }).catch((err) => {

            })
        }
    }
    catch (err) {
        console.log('err', err)
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        let userExist = await usermodel.findOne({ email })

        if (userExist) {
            const mypassword = await bcrypt.compare(password, userExist?.password)
            if (mypassword) {
                res.send({ status: 'success', message: 'Congratulation You Successfully Login !' })
            }
            else {
                res.send({
                    status: 'error', message: 'Incorrect Password'
                })
            }
        }
        else {
            res.send({ status: 'error', message: 'User not exist please contact your admin' })
        }
    }
    catch (err) {
        console.log('err in login', err)
    }


}
module.exports = {
    registerUser,
    loginUser,
}