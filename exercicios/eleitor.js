/**
 * ELEITOR - Obrigatoriedade de votar
 */

const read = require('readline-sync')
let idade

console.clear()
console.log("--------- ELEITOR ---------")
console.log("")

idade = Number(read.question("Digite a sua idade: "))

if (idade < 16) {
    console.log("PROIBIDO VOTAR")
} else if (idade > 17 && idade < 71) {
    console.log("OBRIGATÓRIO VOTAR")
} else {
    console.log("VOTO FACULTATIVO")
}
