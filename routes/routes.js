const routes = require('express').Router();
const userSignUp = require('../controllers/authController');    
const userSchema = require('../validation/userSchema'); 
const validatorMiddleware = require('../middleware/validatorMiddleware');   
//user routes
routes.post('/sign-up', validatorMiddleware(userSchema), userSignUp);
module.exports = routes;