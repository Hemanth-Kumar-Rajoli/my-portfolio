const nodeMailer = require('nodemailer');
const sendEmail = async(options)=>{
    // const traspoter = nodeMailer.createTransport({
    //     host:process.env.MAIL_TRAP_HOST,
    //     port:process.env.MAIL_TRAP_PORT,
    //     auth:{
    //         user:process.env.MAIL_TRAP_USER_NAME,
    //         pass:process.env.MAIL_TRAP_USER_PASSWORD
    //     }
    // })
    const traspoter = nodeMailer.createTransport({
        service:'SendGrid',
        auth:{
            user:'apikey',
            pass:process.env.SENDGRID_PASSWORD
        }
    })
    const mailOptions={
        from:"19691a0547@mits.ac.in",
        to:"hemanthkumarrajoli@gmail.com",
        subject:options.subject,
        text:options.message
    }
    await traspoter.sendMail(mailOptions);
}
module.exports = sendEmail;