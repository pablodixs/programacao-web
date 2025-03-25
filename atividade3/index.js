const calculadora = require('./util/calculadora')
const express = require('express')

const app = express()
const PORT = 8080

app.get('/somar/:a/:b', (req, res) => {
    const { a, b } = req.params
    const resultado = calculadora.somar(Number(a), Number(b))
    res.send(`O resultado da soma é ${resultado}`)
})

app.get('/subtrair/:a/:b', (req, res) => {
    const { a, b } = req.params
    const resultado = calculadora.subtrair(Number(a), Number(b))
    res.send(`O resultado da subtração é ${resultado}`)
})

app.get('/multiplicar/:a/:b', (req, res) => {
    const { a, b } = req.params
    const resultado = calculadora.multiplicar(Number(a), Number(b))
    res.send(`O resultado da multiplicação é ${resultado}`)
})

app.get('/dividir/:a/:b', (req, res) => {
    const { a, b } = req.params
    const resultado = calculadora.dividir(Number(a), Number(b))
    res.send(`O resultado da divisão é ${resultado}`)
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT)
})
