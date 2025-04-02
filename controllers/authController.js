const UserModel = require('../models/user')


const userSignUp=async(req,res)=>{     
    try {
        console.log('Request body:', req.body)
        const user = await UserModel.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
module.exports=userSignUp