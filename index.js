const express = require('express')
const app = express()

app.get('/',(req,res) => {
  res.sendFile(__dirname + "/mess.html")
})

app.listen(process.env.PORT)