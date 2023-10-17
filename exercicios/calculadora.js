/**
 * Estudo das funções
 * Calculadora
 */

const read = require('readline-sync')

console.clear()
console.log(" _____     _         _       _             ")
console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")

console.log("")
console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Porcentagem")
let opcao = Number(read.question("Digite a opcao desejada: ").replace(",", "."))
//melhorando a experiência do usuárion (validação)
if (opcao < 1 || opcao > 5) {
    console.log("Opção inválida")
    process.exit([0]) //encerra o aplicativo no console
}

console.clear()
let num1 = Number(read.question("Digite o primeiro valor: ").replace(",", "."))
let num2 = Number(read.question("Digite o segundo valor: ").replace(",", "."))
switch (opcao) {
    case 1:
        //executar a função somar()
        somar(num1, num2)
        break
    case 2:
        //executar a função subtrair()
        subtrair(num1, num2)
        break
    case 3:
        //executar a função multiplicar()
        multiplicar(num1, num2)
        break
    case 4:
        //executar a função dividir()
        dividir(num1, num2)
        break
    case 5:
        //executar a função calcularPorcentagem()
        calcularPorcentagem(num1, num2)
        break
}

//Função somar
//Observação: Funções não atribuídas a variáveis podem ser declaradas no fim do código, funções atribuídas e arrow function precisam ser declaradas no início do código
function somar(num1, num2) {
    return console.log(`A soma de ${num1} + ${num2} = ${num1 + num2}`)
}

function subtrair(num1, num2) {
    return console.log(`A subtração de ${num1} - ${num2} = ${num1 - num2}`)
}

function multiplicar(num1, num2) {
    return console.log(`A multiplicação de ${num1} x ${num2} = ${num1 * num2}`)
}

function dividir(num1, num2) {
    //validação
    if (num2 === 0) {
        console.log("Impossível a divisão por zero")
        process.exit([0])
    } else {
        return console.log(`A divisão de ${num1} / ${num2} = ${num1 / num2}`)
    }
}

function calcularPorcentagem() {
    return console.log (`${num1}% de ${num2} = ${(num1 * num2) / 100}`)
}



