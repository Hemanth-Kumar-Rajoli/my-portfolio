const express = require('express')
const indexRoute = require('./Routers/myRoutes')
const messagesRoute = require('./Routers/uploadMessages');
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/uploadMessage',messagesRoute)
app.use('/',indexRoute)
module.exports = app