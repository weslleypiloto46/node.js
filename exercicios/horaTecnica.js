/**
 * Cálculo do valor da hora de serviço
 */

const read = require('readline-sync')

let remuneracao, custo, horasMes, horaTecnica, estimativa, total

console.clear()
console.log("===================================")
console.log("=   Cálculo do valor do serviço   =")
console.log("===================================")
console.log("")

//entrada 1
remuneracao = Number(read.question("Remuneracao mensal pretendida: ").replace(",","."))
horasMes = Number(read.question("Carga horaria mensal de trabalho: ").replace(",","."))
custo = Number(read.question("Custo operacional: ").replace(",","."))
//processamento 1
horaTecnica = (remuneracao + (0.3 * remuneracao) + custo + (0.2 * remuneracao)) / horasMes
//saída 1
console.log(`Hora Técnica: R$ ${horaTecnica.toFixed(2)}`)
//entrada 2
estimativa = Number(read.question("Estimativa de horas deste servico: ").replace(",","."))
//processamento 2
total = horaTecnica * estimativa
//saída 2
console.log(`Total a ser cobrado do cliente: R$ ${total.toFixed(2)}`)