const Joi= require('joi');


//use this schema to validate the user data before saving it to the database
const userSchema=  Joi.object({
    firstName:Joi.string().min(3).max(30).required(),
    lastName:Joi.string().min(3).max(30).required(),
    email:Joi.string().email().max(50).required(),
    password:Joi.string().min(8).max(20).required(),
    gender:Joi.string().valid('male','female','other').required(),
    age:Joi.number().min(15).max(50).required(),
})

module.exports=userSchema;