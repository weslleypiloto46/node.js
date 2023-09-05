/**
 * app do exercicios 6 
 */

const read =require("readline-sync")

let custo
let lucros
let venda

console.clear()

custo =Number(read.question("digite quanto custa"))
lucro =Number(read.question("digite o valor do lucro"))

valor =(custo*lucro) /100
venda =(custo+valor)

console.clear()
console.log("---------------")
console.log("resultado final")
console.log(`valor ${valor}%`)
console.log(`venda ${venda}`)
