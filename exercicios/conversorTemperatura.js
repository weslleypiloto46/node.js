/**
 * Conversor de temperatura
 * Fahrenheit para Celsius
 */

//importação do módulo (readline-sync)
const read = require('readline-sync')
//variáveis
let c,f
console.clear()
console.log("==============================")
console.log("== Conversor de Temperatura ==")
console.log("== Fahrenheit para Celsius  ==")
console.log("==============================")
console.log("")
//entrada
f = Number(read.question("Digite a temperatura em Fahrenheit: ").replace(",","."))
//processamento
c = (f - 32) / 1.8
//saída
console.log(`Temperatura em Celsius: ${c.toFixed(1)}ºC`)

