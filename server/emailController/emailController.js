const nodemailer = require('nodemailer')
require('dotenv').config()

const sendMail = async (req, res, next) => {
               const {recipient_email, subject, message} = req.body

               let emptyFields = []

               if(!recipient_email)
               {
                   emptyFields.push('recipient_email')
               }
           
               if(!subject)
               {
                   emptyFields.push('subject')
               }
           
               if(!message)
               {
                   emptyFields.push('message')
               }

               if(emptyFields.length > 0)
               {
                   return res.status(400).json({error: 'Please fill in all fields', emptyFields})
               }

               const transport = nodemailer.createTransport({
                              service: 'gmail',
                              host: "imap.gmail.com",
                              Port: 993,
                              secure: false,
                              auth: {
                                             user: process.env.EMAIL_ADDRESS,
                                             pass: process.env.PASSWORD
                              }
               })

               try
               {
                    const options = {
                        from: recipient_email,
                        to:  process.env.ADMIN_EMAIL,
                        subject: subject,
                        text: message
                    }

                    transport.sendMail(options, (error, info) => {
                            if(error)
                            {
                                        res.status(400).json(error, 'error');
                            }
                            else
                            {
                                        res.status(200).json(info)
                            }
                    })
               }
               catch(error)
               {
                    res.status(400).json({error: error.message})
               }
}

module.exports = {sendMail}