/**
 * APP Etanol x Gasolina
 */

// pacote usado para entrada de dados via terminal
const read = require('readline-sync')
// pacote usado para formatar textos no console
const colors = require('colors')
// variáveis
let etanol, gasolina
// limpar a tela do console
console.clear()
console.log("=======================")
console.log("=  Etanol x Gasolina  =")
console.log("=======================")
console.log("")
//entrada
//Number() Converte uma String em número
//.replace() Trocar um caractere por outro
etanol = Number(read.question("Digite o valor do etanol: ").replace(",", "."))
gasolina = Number(read.question("Digite o valor da gasolina: ").replace(",", "."))
//processamento/saída
if (etanol < 0.7 * gasolina) {
    console.log("Abastecer com Etanol".green)
} else {
    console.log("Abastecer com Gasolina".red)
}



