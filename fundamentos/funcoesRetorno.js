/**
 * Estudo das funções
 * Funções com parâmetros e retorno
 */

//Observação: Funções não atribuídas a variáveis podem ser declaradas no fim do código, funções atribuídas e arrow function precisam ser declaradas no início do código

// sintaxe comum
function somar(num1, num2) {
    return (console.log(num1 + num2))
}

//Para executar a função, devemos passar 2 valores
somar(2, 5)

// função atribuída
let somarAtribuida = function (num1, num2) {
    return (console.log(num1 + num2))
}

somarAtribuida(5, 5)

//Arrow function
let somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}

somarAF(2, 2)