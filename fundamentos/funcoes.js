/**
 * Estudo das funções
 * Funções simples sem parâmetros ou retorno
 */

//Observação: Funções não atribuídas a variáveis podem ser declaradas no fim do código, funções atribuídas e arrow function precisam ser declaradas no início do código

//função simples
function hello() {
    console.log("Hello function")
}

//para executar uma função basta escrever o nome da função junto com parênteses
hello()

//funções atribuídas
const hello2 = function() {
    console.log("Hello function atribuida")
}
hello2()

//função atribuída simplificada (arrow function)
const hello3 = () => {
    console.log("Hello arrow function")
}
hello3()

console.log(typeof(hello3))