/**
 * calculo da area e o perimetro 
 */
const read = require('readline-sync')

let base,altura,area,perimetro
console.clear()
console.log("Retantulo")
console.log("")
console.log(" _________________")
console.log("|__________________|")
console.log("|__________________|altura")
console.log("|__________________|")
console.log("        base        ")

altura =Number(read.question("digite o valor da altura:").replace(',','.'))
base =Number(read.question("digite o valor da base:").replace(',','.'))

area = base*altura
perimetro = base + altura + base + altura

console.log(`area do perimetro: ${area.toFixed(2)}`) 