/**
 * Conversão de velocidade (milhas - Km/h)
 */

const read = require('readline-sync')

let km,milhas

console.clear()
console.log("-----------------------------")
console.log("-- Conversor de velocidade --")
console.log("--     Milhas -> Km/h      --")
console.log("-----------------------------")
console.log("")

//entrada
milhas = Number(read.question("Digite a velocidade em milhas: ").replace(",","."))
//processamento
km = milhas * 1.60934
//saída
console.log(`Velocidade em Km/h: ${km.toFixed(2)}`)