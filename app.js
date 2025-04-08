const express=require('express')
const connectDB=require('./config/database')
const limiter=require('./config/rateLimit')
const userSignUp=require('./controllers/authController')    
const app=express()
const userSchema = require('./validation/userSchema')
const validatorMiddleware = require('./middleware/validatorMiddleware')
const routes = require('./routes/routes')
app.use(express.json())

//user routes
app.use(limiter)
app.use('/',routes)     


connectDB().then(()=>{ 
    console.log('Connected to MongoDB')
    app.listen(3000,()=>{
        console.log('Server is running on port 3000')
    })

}).catch((err)=>{
    console.error('Error connecting to MongoDB:', err)
})
