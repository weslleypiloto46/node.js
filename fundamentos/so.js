/**
 * Exemplo de uso da estrutura switch case
 */

const read = require('readline-sync')

let opcao

console.clear()
console.log("Sistema operacional")
console.log("")
console.log("1. Windows")
console.log("2. Linux")
console.log("3. Mac")
opcao = Number(read.question("Escolha um sistema: "))
switch (opcao) {
    case 1:
        console.clear()
        console.log("Carregando o Windows............")
        break
    case 2:
        console.clear()
        console.log("Carregando o Linux...")
        break
    case 3:
        console.clear()
        console.log("Carregando o Mac.....")     
        break
    default:
        console.log("Opção inválida")
        break
}