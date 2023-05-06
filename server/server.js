const express = require('express')
const app = express()
require('dotenv').config()
const emailRouter = require('./router/emailRouter')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/email', emailRouter)

app.listen(process.env.PORT, () => {
               console.log(`server running on port http://localhost:${process.env.PORT}`);
})