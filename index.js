const express = require('express')
const app = express()

app.get('/',(req,res) => {
  res.send("Ola mundo")
})

app.listen(process.env.PORT)