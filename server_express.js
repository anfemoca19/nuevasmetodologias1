const express = require('express')
const app = express()
 
let carro = {
    placa : "HCN54D",
    modelo : "2014",
    marca : "Mercedez",
    puertas : 4
}
app.get('/', function (req, res) {
  res.send('Soy el index')
})
app.get('/rara', function (req, res) {
    res.send('Soy la peticion rara')
  })
app.get('/carro', function (req, res) {
    res.send(carro);
  })
app.listen(3000)

console.log("Server en el puerto 3000")