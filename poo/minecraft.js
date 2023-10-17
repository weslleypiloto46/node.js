/**
 * POO - Fundamentos da Programação Orientada a objetos
 * Exemplo: Jogo Minecraft
 */

// Classe modelo (Abstração)
class Bloco {
    //atributos
    constructor(resistencia, textura) {
        this.resistencia = resistencia
        this.textura = textura
    }
    //ações (métodos)
    criarBloco() {
        console.log("------------------------------------")
        console.log("┍━┑")
        console.log("┕━┙")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloco de ${this.textura} colocado.`)
    }

    minerar() {
        console.log("☐ ☐ ☐ Recursos obtidos!")
    }
}

// Classe modelo com herança(extends)
class Enxada extends Bloco {
    //atributos
    constructor(resistencia, textura, conquista) {
        super(resistencia, textura)
        this.conquista = conquista
    }
    //métodos
    criarEnxada() {
        console.log("------------------------------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }

    arar() {
        console.log("._._._. Terra arada!")
        if (this.conquista === true) {
            console.log("☀ Conquista obtida!")
        }
    }

    //Polimorfismo
    minerar() {
        console.log("✟ Dano atribuído")
    }

}


// Criação de objetos (Mundo)
console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | | ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|")
console.log("")

// criando um bloco de terra
// new (novo objeto)
// Bloco (classe modelo(resistencia, textura))
const bloco1 = new Bloco(1, "terra")
bloco1.criarBloco()

//criando um bloco de madeira
const bloco2 = new Bloco(2, "madeira")
bloco2.criarBloco()
bloco2.construir()

//criando um bloco de pedra
const bloco3 = new Bloco(5, "pedra")
bloco3.criarBloco()
bloco3.minerar()

//criando uma enxada de madeira
const enxada1 = new Enxada(2, "madeira", false)
enxada1.criarEnxada()
enxada1.arar()

//criando uma enxada de ferro
const enxada2 = new Enxada(5, "ferro", true)
enxada2.criarEnxada()
enxada2.arar()

//criando uma enxada de diamante
const enxada3 = new Enxada(10, "diamante", false)
enxada3.criarEnxada()
enxada3.minerar()

