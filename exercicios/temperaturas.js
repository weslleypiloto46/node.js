/**
 * conversor de temperatura
 * fahrenheit para celsus
 */

//importaçao do modulo (readline-sync)
const read = require('readline-sync')
//variaveis
let c,f
//entrada
f = Number(read.question('digite a temperatura em fahrenheit:')) 
//processamento
c = (f - 32) / 1.8
//saida
console.log(`temperatura em celsius: ${c.toFixed(1)}`)
