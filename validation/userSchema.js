const Joi= require('joi');


//use this schema to validate the user data before saving it to the database
const userSchema=  Joi.object({
    firstName:Joi.string().min(3).max(30).trim().required(),
    lastName:Joi.string().min(3).max(30).trim().required(),
    email:Joi.string().email().trim().min(5).max(80).required().strict(),
    password:Joi.string().min(8).trim().max(20).required(),
    gender:Joi.string().valid('male','female','other').required(),
    age:Joi.number().min(15).max(50).required(),
})

const userSigInSchema=Joi.object({ 
    email:Joi.string().email().trim().min(5).max(80).required().strict(),
    password:Joi.string().min(8).trim().max(20).required(),
})
module.exports={userSchema,userSigInSchema};