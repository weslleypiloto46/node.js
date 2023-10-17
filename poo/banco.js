/**
 * Exercício de fixação - POO
 */

//modelo
class Conta {
    //atributos
    constructor(numero, titular, saldo) {
        this.numero = numero
        this.titular = titular
        this.saldo = saldo
    }
    //métodos
    exibirSaldo() {
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`)
    }
    depositar(valor) {
        this.saldo += valor
        console.log(`Crédito de R$ ${valor.toFixed(2)}`)
    }
    sacar(valor) {
        //validação
        if (valor <= this.saldo) {
            this.saldo -= valor
            console.log(`Débito de R$ ${valor.toFixed(2)}`)
        } else {
            console.log("Saque não permitido")
        }
    }
}

//herança
class contaPoupanca extends Conta {
    //atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
    }
    //métodos
    exibirSaldoPoupanca() {
        console.log(`Saldo de poupança: R$ ${this.saldo.toFixed(2)}`)
    }
}

/***** Clientes *****/
console.clear()

console.log(" /$$$$$$$   /$$$$$$  /$$   /$$ /$$   /$$ ")
console.log("| $$__  $$ /$$__  $$| $$$ | $$| $$  /$$/")
console.log("| $$  \\ $$| $$  \\ $$| $$$$| $$| $$ /$$/ ")
console.log("| $$$$$$$ | $$$$$$$$| $$ $$ $$| $$$$$/  ")
console.log("| $$__  $$| $$__  $$| $$  $$$$| $$  $$  ")
console.log("| $$  \\ $$| $$  | $$| $$\\  $$$| $$\\  $$ ")
console.log("| $$$$$$$/| $$  | $$| $$ \\  $$| $$ \\  $$")
console.log("|_______/ |__/  |__/|__/  \\__/|__/  \\__/")

console.log("")

//instanciar um objeto
let cc1 = new Conta(1, "Leandro Ramos", 10000)
console.log(`Cliente: ${cc1.titular} conta: ${cc1.numero}`)
cc1.exibirSaldo()
cc1.depositar(5000)
cc1.exibirSaldo()
cc1.sacar(8000)
cc1.exibirSaldo()
let cc1p = new contaPoupanca(5001, "Leandro Ramos", 1000)
cc1p.exibirSaldoPoupanca()