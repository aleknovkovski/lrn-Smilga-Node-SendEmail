const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')

async function sendEmailEth (req, res) {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.TRANSPORTER_USER,
            pass: process.env.TRANSPORTER_PASSWORD
        }
    });

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello zzzworld?", // plain text body
        html: "<b>Hello worldzz?</b>", // html body
    });

    res.send('send email functionality')
}

async function sendEmailSG (req, res) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: process.env.TEST_RECIPIENT, // Change to your recipient
        from: process.env.VERIFIED_SG_SENDER, // Change to your verified sender
        subject: 'Sending with SendGrid is Fun (Test)',
        text: 'Just testing',
        html: 'Just testing',
    }
    sgMail
        .send(msg)
        .then((wut) => {
            console.log(wut)
        })
        .catch((error) => {
            console.error(error)
        })
    res.send('send email functionality')
}

module.exports = {sendEmailEth, sendEmailSG}