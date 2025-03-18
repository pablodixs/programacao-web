function transporMatriz(A) {
    const linhas = A.length
    const colunas = A[0].length

    const transp = []

    for (let j = 0; j < colunas; j++) {
        const novaLinha = []
        for (let i = 0; i < linhas; i++) {
            novaLinha.push(A[i][j])
        }
        transp.push(novaLinha)
    }

    console.log('Matriz original:')
    console.log(A)
    console.log('Matriz transposta:')
    console.log(transp)
}

const A = [
    [1, 2],
    [3, 4],
    [5, 6],
]

transporMatriz(A)
