/**
 * PDV - Ponto de vendas
 */

// importação de módulos
const read = require('readline-sync')

// variáveis
let total, desconto, valor, dinheiro, troco

console.clear()
console.log("   ___  ___ _   __")
console.log("  / _ \\/ _ \\ | / /")
console.log(" / ___/ // / |/ / ")
console.log("/_/  /____/|___/ ") 
console.log("")

// entrada 1
valor = Number(read.question("Digite o valor total da compra: ").replace(",","."))
desconto = Number(read.question("Digite o valor do desconto em %: ").replace(",","."))
// processamento 1
total = valor - ((desconto * valor) / 100)
// saída 1
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log("___________________________________")
// entrada 2
dinheiro = Number(read.question("Digite o valor pago em dinheiro: ").replace(",","."))
// processamento 2
troco = dinheiro - total
// saída 2
console.log(`Troco: R$ ${troco.toFixed(2)}`)


