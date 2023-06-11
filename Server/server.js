//server set up

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')


//middleware init

require('dotenv').config({path: './config/.env'})
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

//file connect

const connectDB = require('./config/main.database')
const mainRoutes = require('./routes/main.route')



//db init

connectDB()

//route set up

app.use('/', mainRoutes)

//listening

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})  