/**
 * (etanol x gasolina)
 */

const read = require('readline-sync')
const colors = require('colors')
 
let gasolina,etanol

console.clear()
console.log("=====================")
console.log("= etanol x gasolina =")
console.log("=====================")

etanol =Number(read.question("digite o valor do etanol: ").replace(",","."))
gasolina =Number(read.question("digite o valor da gasolina: ").replace(",","."))

console.clear()
if (etanol<0.7 * gasolina){
    console.log('etanol mais vantajoso'.green)
} else{
    console.log('gasolina mais vantajosa'.red)
}

