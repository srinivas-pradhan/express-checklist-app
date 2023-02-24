const express = require('express')
const config = require('./config/config')
//const testing = require('./conrollers/cognito')

const app = express()
const PORT = config.PORT

app.get('/',(req,res) => {
    console.log({data: "Hello World"})
    return res.send('Hello')
})


app.listen(PORT, () => {
    console.log(`App is lisening on Port ${PORT} ...`)
    console.log(PORT)
})
