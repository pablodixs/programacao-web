function verificarNumeroPrimo(n) {
    if (n < 2) return false

    for (let i = 2; i < n; i++) {
        if (n % 2 === 0) return false
    }

    return true
}

// const arrayDeTeste = [0, 1, 2, 3, 7, 83, 100, 991, 104729, 14348907]

// for (number in arrayDeTeste) {
//     console.log(verificarNumeroPrimo(number))
// }

verificarNumeroPrimo(0)
verificarNumeroPrimo(1)
verificarNumeroPrimo(2)
verificarNumeroPrimo(3)
verificarNumeroPrimo(7)
verificarNumeroPrimo(83)
verificarNumeroPrimo(100)
verificarNumeroPrimo(991)
verificarNumeroPrimo(104729)
verificarNumeroPrimo(14348907)
