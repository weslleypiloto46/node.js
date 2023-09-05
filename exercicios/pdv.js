/**
 * PDV - ponto de venda
 */

//importaçao de modulo
const read = require('readline-sync')

//variaveis
let total, desconto, valor, dinheiro, troco

console.clear()
console.log("                         ")        
console.log("|  __ \ |  __ \\ \    / /")
console.log("| |__) || |  | |\ \  / / ")
console.log("|  ___/ | |  | | \ \/ /  ")
console.log("| |     | |__| |  \  /   ")

//entrada
valor = Number(read.question("digite o valor total da compra:"))
desconto = Number(read.question("digite o valor do desconto em %: "))
//processamento
total = valor - ((desconto * valor) /100)
//saida
console.log(`total: R$ ${total.tofixed(2)}`)