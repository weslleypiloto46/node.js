/**
 * App para calcular a média de 2 notas
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//importação do pacote colors
const colors = require('colors')

//variáveis
let nome, disciplina
let nota1, nota2, media

console.clear()
console.log(" ___      _     _   _ ")      
console.log("| _ ) ___| |___| |_(_)_ __ ")
console.log("| _ \\/ _ \\ / -_)  _| | '  \\ ") 
console.log("|___/\\___/_\\___|\\__|_|_|_|_| ")
console.log("")

//entrada
nome = read.question("Digite o seu nome: ")
disciplina = read.question("Digite a disciplina: ")
nota1 = Number(read.question("Digite a nota1: ").replace(",","."))
nota2 = Number(read.question("Digite a nota2: ").replace(",","."))

//processamento
media = (nota1 + nota2) / 2

//saída
console.clear()
console.log("----------------------------------")
console.log("Ficha do aluno".bold)
console.log(`Nome: ${nome}`)
console.log(`Disciplina: ${disciplina}`)
console.log(`Nota1: ${nota1}`)
console.log(`Nota2: ${nota2}`)
console.log(`Média final: ${media}`)
if (media < 5) {
    console.log("REPROVADO".red)
} else {
    console.log("APROVADO".blue)
}
console.log("----------------------------------")