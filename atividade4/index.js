const express = require('express')

const app = express()
const PORT = 8080

const estoqueTotal = []

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params

    const novoProd = {
        id: Number(id),
        nome: nome,
        qtd: Number(qtd),
    }

    estoqueTotal.push(novoProd)

    return res.json(novoProd)
})

app.get('/listar', (req, res) => {
    return res.json(estoqueTotal)
})

app.get('/remover/:id', (req, res) => {
    const { id } = req.params

    const index = estoqueTotal.findIndex((item) => item.id === Number(id))

    if (index === -1) {
        return res.status(404).json({ message: 'Produto não encontrado' })
    }

    estoqueTotal.splice(index, 1)

    return res.json({ message: 'Produto removido!' })
})

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params

    const index = estoqueTotal.findIndex((item) => item.id === Number(id))

    if (index === -1) {
        return res.status(404).json({ message: 'Produto não encontrado' })
    }

    estoqueTotal[index].qtd = Number(qtd)

    return res.json({ message: 'Produto editado!' })
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT)
})
