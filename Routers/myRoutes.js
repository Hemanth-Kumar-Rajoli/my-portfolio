const express = require('express')
const ejs = require('ejs')
const router = express.Router()

router.route('/').get((req,res)=>{
    res.render('index')
})

module.exports = router