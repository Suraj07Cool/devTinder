const routes = require('express').Router();
const {userSignUp, userSignIn} = require('../controllers/authController');    
const {userSchema, userSigInSchema} = require('../validation/userSchema'); 
const validatorMiddleware = require('../middleware/validatorMiddleware');   
//user routes
routes.post('/sign-up', validatorMiddleware(userSchema), userSignUp);
routes.post('/sign-in', validatorMiddleware(userSigInSchema), userSignIn);

module.exports = routes;