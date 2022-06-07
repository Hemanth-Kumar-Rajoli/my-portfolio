const express = require('express')
const ejs = require('ejs')
const router = express.Router()

router.route('/').get((req,res)=>{
    res.render('index',{skills:["JS","node.js","REACT","JAVA","PYTHON","MySql","HTML","CSS"],descriptions:{"JS":"The first language I experienced with OOP's concept with minimal doubts on OOP'S concept raised by python language. ","node.js":'djfajb',"REACT":'dsakfjbadsf',"JAVA":'kajsfdasdgasdf',"PYTHON":'The langua',"MySql":'jhafkjhasdfjhdsf',"HTML":'Commenced with enthusiasm to learn and do something big, I did it. The amusing moment here is I used to code in pure HTML format as a kiddy coder, and now HTML is altered with EJS and react. My moment with HTML is like coding is easy but alignment is tricky.',"CSS":'CSS The "make-up man" of HTML. Learning is easy, applying needs experience to arrange all things proper and good looking. '}});
})

module.exports = router