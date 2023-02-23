const express = require('express')
const dotenv = require('dotenv')

const app = express()
const PORT = process.env.PORT

app.get('/',(req,res) => {
    console.log({data: "Hello World"})
    return res.send('Hello')
})


app.listen(PORT, () => {
    console.log(`App is lisening on Port ${PORT} ...`)
    console.log(PORT)

})
