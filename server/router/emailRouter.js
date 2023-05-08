const express = require('express')
const emailRouter = express.Router()
const {sendMail} = require('../emailController/emailController')

emailRouter.post('/sendemails', sendMail)

module.exports = emailRouter