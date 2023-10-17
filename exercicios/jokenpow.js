/**
 * Jogo Pedra - Papel - Tesoura
 */

const read = require('readline-sync')

let jogador, computador

console.clear()
console.log("_______ JoKenPow _______")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
jogador = Number(read.question("Digite a opcao desejada: "))
//lógica do jogador
switch (jogador) {
    case 1:
        console.log("Jogador escolheu Pedra")
        break
    case 2:
        console.log("Jogador escolheu Papel")
        break
    case 3:
        console.log("Jogador escolheu Tesoura")
        break
    default:
        console.log("Opcao invalida")
        break
}
//Lógica do computador
computador = Math.floor(Math.random() * 3 + 1)
switch (computador) {
    case 1:
        console.log("Computador escolheu Pedra")
        break
    case 2:
        console.log("Computador escolheu Papel")
        break
    case 3:
        console.log("Computador escolheu Tesoura")
        break
}
//lógica para determinar empate ou declarar o vencedor
if (jogador === computador) {
    console.log("EMPATE")
} else if ((jogador === 1 && computador === 3) || (jogador === 2 && computador === 1 || (jogador === 3 && computador === 2))) {
    console.log("JOGADOR VENCEU")
} else {
    console.log("COMPUTADOR VENCEU")
}