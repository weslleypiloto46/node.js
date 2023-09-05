/**
 * Cálculo da área e perímetro de um retângulo
 */

// pacote (bilioteca)
const read = require('readline-sync')

// variáveis
let base,altura,area,perimetro

console.clear()
console.log("Retângulo")
console.log(" __________________ ")
console.log("|                  |")
console.log("|                  | altura ")
console.log("|__________________| ")
console.log("        base   ")
console.log("")

//entrada
altura = Number(read.question("Digite o valor da altura: ").replace(",","."))
base = Number(read.question("Digite o valor da base: ").replace(",","."))

//processamento 1
area = base * altura

//processamento 2
perimetro = base + altura + base + altura

//saída 1
console.log(`Área do retângulo: ${area.toFixed(2)} metros quadrados`)

//saída 2
console.log(`Perímetro do retângulo: ${perimetro.toFixed(2)} metros`)
