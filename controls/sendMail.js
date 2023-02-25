const nodeMailer = require('nodemailer');
const sgmail = require('@sendgrid/mail');
const sendEmail = async(options)=>{
    // const traspoter = nodeMailer.createTransport({
    //     host:process.env.MAIL_TRAP_HOST,
    //     port:process.env.MAIL_TRAP_PORT,
    //     auth:{
    //         user:process.env.MAIL_TRAP_USER_NAME,
    //         pass:process.env.MAIL_TRAP_USER_PASSWORD
    //     }
    // })
    const API_KEY = process.env.SENDGRID_PASSWORD
    sgmail.setApiKey(API_KEY)
    // const traspoter = nodeMailer.createTransport({
    //     service:'SendGrid',
    //     auth:{
    //         user:'apikey',
    //         pass:process.env.SENDGRID_PASSWORD
    //     }
    // })

    const mailOptions={
        from:{
            name:'MY PORTFOLIO',
            email:'hemanthkumarrajoli@gmail.com'
        },
        to:"hemanthkumarrajoli@gmail.com",
        subject:options.subject,
        text:options.message
    }
    sgmail.send(mailOptions).then((res)=>{
        console.log(res)
    }).catch(()=>{
        console.log("error while sending message")
    })

}
module.exports = sendEmail;