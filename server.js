const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Bienvenido al CartService!')
})

app.get('/version', (req, res) => {
  res.send('1.1.0')
})

app.get('/health', (req, res) => {
  res.send('Funcionando correctamente!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})