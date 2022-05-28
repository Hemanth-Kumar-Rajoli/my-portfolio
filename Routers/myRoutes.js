const express = require('express')
const ejs = require('ejs')
const router = express.Router()

router.route('/').get((req,res)=>{
    res.render('index',{skills:["HTML","JS","PYTHON","JAVA","CSS","REACT","node.js","MySql"]});
})

module.exports = router