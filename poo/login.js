/**
 * POO - estudo do encapsulamento
 * Revisão
 */

class Usuarios {
    //atributos
    constructor(login, senha) {
        this.login = login // atributo público
        //-------------------------------------------
        let _senha = senha //atributo privado: let _
        // método para obter a senha (get)
        this.getSenha = function() {
            return _senha
        }
        // método para modificar a senha (set)
        this.setSenha = function (novaSenha) {
            _senha = novaSenha;
        }
        //-------------------------------------------
    }
    //metodo
    logar() {
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)//acessar senha encapsulada
        if (this.login === "admin" && this.getSenha() === "123@senac") {
            console.log("Usuário autenticado")
        } else {
            console.log("Usuário e/ou senha inválido(s)")
        }
    }
}

/** Sistema **/
console.clear()
// instanciar(criar) um objeto
const user1 = new Usuarios("admin","123456@senac")
user1.logar()
user1.setSenha("123@senac") //setar senha encapsulada
user1.logar()