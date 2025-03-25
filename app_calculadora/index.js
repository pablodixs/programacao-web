const calculadora = require('./calculadora')
const express = require('express')

const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    res.send('Olá, mundo!')
})

app.get('/soma', (req, res) => {
    const { a, b } = req.query
    const resultado = calculadora.somar(Number(a), Number(b))
    res.send(`O resultado da soma é ${resultado}`)
})

app.get('/subtrair', (req, res) => {
    const { a, b } = req.query
    const resultado = calculadora.subtrair(Number(a), Number(b))
    res.send(`O resultado da subtração é ${resultado}`)
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT)
})
