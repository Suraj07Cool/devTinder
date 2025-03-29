const express=require('express')
const app=express()

app.use('/suraj', (req,res)=>{
    console.log('Suraj is doing awesome')
})
app.use((req,res)=>{
    res.send('Hello from Express!')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})