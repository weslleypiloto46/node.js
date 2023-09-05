/**
 * ELEITOR - obrigatoriedade
 */

const read = require('readline-sync')
let idede

console.clear()
console.log('-----ELEITOR------')
console.log('')

idade =Number(read.question('digite sua idade'))

if (idade < 16) {
    console.log('proibido votar')
} else {
    if (idade === 16 || idade === 17 ||idade > 70) {
        console.log('VOTO FACULTIVO')
    } else {
        console.log('OBRIGATORIO')
    }
}