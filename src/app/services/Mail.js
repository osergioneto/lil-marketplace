const nodemailer = require("nodemailer");
const mailConfig = require("../../config/mail");

const tranport = nodemailer.createTransport(mailConfig);

module.exports = tranport;
