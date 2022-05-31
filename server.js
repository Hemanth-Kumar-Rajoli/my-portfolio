const app = require('./app')

app.listen(process.env.PORT ||3000,()=>{
    console.log("server is up and running at port number 3000")
})