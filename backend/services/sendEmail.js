const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: true ,
    auth: {
        user: "seuEmail",
        pass: "senha"
    }
})

module.exports = transporter ;