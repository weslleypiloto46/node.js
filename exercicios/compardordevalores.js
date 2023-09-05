/**
 * App para calcular a média de 2 notas
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//importação do pacote colors
const colors = require('colors')

//variáveis
let gasolina, alcool

//entrada
gasolina = Number(read.question("Digite o valor: ").replace(",","."))
alcool = Number(read.question("Digite o valor: ").replace(",","."))


//processamento




//saída

if (gasolina <= alcool) {
    console.log("gasolina é melhor".red)
} else {
    console.log("alcool é melhor".green)
}
console.log("----------------------------------")