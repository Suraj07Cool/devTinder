const UserModel = require('../models/user')
const { decrypt, encrypt, catchError, generateToken } = require('../utils/helper')
const { UNIQUE_CONSTRAINT_ERROR } = require('../utils/messages')
const {successResponseData} = require('../utils/response')


const userSignUp=async(req,res)=>{     
    try {
        console.log(req.body)
        req.body.password=encrypt(req.body.password)
        //imp to covert email in lowercase before saving to db
        req.body.email=req.body.email.toLowerCase()
        const user = await UserModel.create(req.body)
        successResponseData(res, user, 'User created successfully')
    } catch (error) {
        console.log(error)
        res.status(400).json(UNIQUE_CONSTRAINT_ERROR.replace('##Key', Object.keys(error.keyValue)[0])   )
    }
}

const userSignIn=async(req,res)=>{
    try {
        // const isUserExists=await UserModel.findOne({email:req.body.email.toLowerCase()},"firstName")
        const isUserExists = await UserModel.findOne(
            { email: req.body.email.toLowerCase() },
            "firstName password" // This is a projection string,
            // {firstName:1, password:1} // This is a projection string
          );
        if(!isUserExists) return res.status(400).json({message:'User not found'})
        const isPasswordMatch=decrypt(req.body.password,isUserExists.password)
        if(!isPasswordMatch) return res.status(400).json({message:'Invalid password'})
        //imp to covert email in lowercase before saving to db
       const token = generateToken(isUserExists._id)
        req.body.email=req.body.email.toLowerCase()
        return successResponseData(res, isUserExists, 'User logged in successfully',{token})
    } catch (error) {
        return catchError(res,error)
        res.status(400).json(UNIQUE_CONSTRAINT_ERROR.replace('##Key', Object.keys(error.keyValue)[0])   )
    }
}
module.exports={userSignUp,userSignIn}