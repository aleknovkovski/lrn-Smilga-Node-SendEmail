const nodemailer = require('nodemailer');

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

module.exports = {sendEmailEth}