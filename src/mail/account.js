const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({ 
        to: email,
        from: 'farhanhlmy@gmail.com',
        subject: 'Thanks for join the application',
        text: `Welcome to the app, ${name}. Let me know how you will get along`
    })
}

module.exports = {
    sendWelcomeEmail
}