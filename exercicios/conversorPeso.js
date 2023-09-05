/**
 * Conversão de peso (libras - Kg)
 */

const read = require('readline-sync')

let kg, libras

console.clear()
console.log("-----------------------------")
console.log("--    Conversor de peso    --")
console.log("--      Libras -> Kg       --")
console.log("-----------------------------")
console.log("")

//entrada
libras = Number(read.question("Digite o peso em libras: ").replace(",", "."))
//processamento
kg = libras / 2.2046
//saída
console.log(`Peso em Kg: ${kg.toFixed(2)}`)