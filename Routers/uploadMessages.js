const express = require('express')
const ejs = require('ejs')
const router = express.Router()
const userMessages = require('../models/userMessageSchema');
const sendEmail = require('../controls/sendMail')
router.route('/').post(async (req,res)=>{
    try{
        await userMessages.create(req.body);
        sendEmail({
            message:`Name: ${req.body.name}\nMail: ${req.body.email}\nMessage: ${req.body.message}`,
            subject:req.body.subject
        })
        console.log("mail sended to :", req.body.email)
    }
    catch(err){
        console.log("error occured",err.message)
    }
    // console.log(responseDB)
    // console.log(req.body)
    res.render('thankYouPage');
})
module.exports = router