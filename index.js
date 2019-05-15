const express = require('express')
// const cors = require('cors')
const { mongoose } = require('./config/database')
const { usersRouter } = require('./app/controller/UsersController')
const { collegeRouter } = require('./app/controller/CollegeController')
const { authenticateUser } = require('./app/middlewares/authentication')
const port = process.env.PORT || 3005
const app = express()

// app.use(cors())
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers','Content-Type,x-auth')
    next()
})

app.use(express.json())
app.use('/users',usersRouter)
app.use('/colleges', authenticateUser, collegeRouter)

app.listen(port,function(){
    console.log('listening on port', port)
})