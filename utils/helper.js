const brcypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { errorResponseWithData } = require('./response');
module.exports={
    encrypt:(data)=>{
        const salt = brcypt.genSaltSync(10);
        const hash = brcypt.hashSync(data, salt);
        return hash;
    },
    
    decrypt:(password, hashedPassword)  =>{
        const compare = brcypt.compareSync(password, hashedPassword);
        return compare;
    },  
    
    generateToken:(userId)=>{
        console.log('userId', process.env.JWT_SECRET)
        const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
        return token;
    },

    catchError:(res,error)=>{
        let errorMessage = error.message;
        return errorResponseWithData(res,errorMessage);      
    },
}