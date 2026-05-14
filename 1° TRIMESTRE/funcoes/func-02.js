// A partir da função abaixo,
// crie as variações:
// (Adição, Subtração, Multiplicação, Divisão)

// divisao
function divisao(n1, n2) {
    if (n2 != 0) {
        n1 / n2
        console.log("A divisão de " +n1+ " por " +n2+ " é = " +n1 /n2)
    } else {

        console.error("Impossível dividir por ZERO!")
    }
}
divisao(32, 2)
divisao(12, 0)


//somar

function somar(n1, n2) {
    if (n1 + n2) {
        console.log("A soma de " +n1+ " mais " +n2+ " é = " +(n1 +n2))
    }
}

somar(9, 7)
somar(79, 38)




function subtração(n1, n2) {
    if (n1 - n2) {
        console.log("A subtração de " +n1+ " menos " +n2+ " é = " + (n1 - n2))
    }
}
subtração(95, 56)
subtração(43, 13)




function multiplicação(n1, n2) {
    if (n1 * n2) {
        console.log("A multiplicação de " +n1+ " por " +n2+ " é = " + (n1 * n2))
    }
}
multiplicação(87, 45)
multiplicação(20, 80)