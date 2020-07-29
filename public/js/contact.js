const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
        auth: {
            api_key: '58a9b28927135f0fe0951c9c79de329c-a65173b1-5077bcc1',
            domain: 'sandbox8cbb3b7af3984d73b0ad447c8ad4520d.mailgun.org'
        }
    };

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, cb) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: 'baylen.jones0224@gmail.com',
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

// Exporting the sendmail
module.exports = sendMail;
