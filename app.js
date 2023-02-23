const express = require('express')
const app = express()

app.get('/',(req,res) => {
    console.log({data: "Hello World"})
    return res.send('Hello')
})


app.listen(5000, () => {
    console.log(`App is lisening on Port 5000 ...`)
})
