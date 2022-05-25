const express = require('express')
const indexRoute = require('./Routers/myRoutes')
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'))

app.use('/',indexRoute)
module.exports = app