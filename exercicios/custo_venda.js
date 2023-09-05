/**
 * Preço de custo x preço de venda
 */

const read = require('readline-sync')

let custo, lucro, venda

console.clear()
console.log("-----------------------------")
console.log("--      Custo x Venda      --")
console.log("-----------------------------")
console.log("")

//entrada
custo = Number(read.question("Digite o preco de custo: ").replace(",", "."))
lucro = Number(read.question("Digite a margem de lucro(%): ").replace(",", "."))
//processamento
venda = custo + (lucro * custo) / 100
//saída
console.log(`Preço de venda: R$ ${venda.toFixed(2)}`)
