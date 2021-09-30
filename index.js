const express = require('express')
const app = express()

app.get('/',(req,res) => {
  res.sendFile(__dirname + "/mess.html")
})

ap.get("/foda",(req,res) => {
  res.json({mensagem: {
    tipo: "Feliz",
    conteudo: "Muito foda!"
  }})
})

app.listen(process.env.PORT)