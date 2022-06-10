const app = require('./app')

const mongoose = require('mongoose');
const dotenv = require('dotenv')
const UserMessages = require('./models/userMessageSchema');
dotenv.config({path:'./config.env'});

const DB = process.env.MONGODB_DATABASE.replace('<password>',process.env.MONGODB_DATABASE_PORTFOLIO_PASSWORD)

mongoose.connect(DB).then(con=>{
    console.log("the server is connected with the database")
}).catch(err=>{console.log("mongoose error",err)})

app.listen(process.env.PORT ||3000,()=>{
    console.log("server is up and running at port number 3000")
})