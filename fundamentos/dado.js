/**
 * Jogo do dado
 */

const read = require("readline-sync")

let face
let escolha = "s"

do {
    console.clear()
    console.log("------ Jogo do dado")
    read.question("Pressione a tecla [Enter] para jogar o dado: ")
    face = Math.floor(Math.random() * 6) // 0 1 2 3 4 5
    switch (face) {
        case 0:
            console.log("╔═══════╗");
            console.log("║       ║");
            console.log("║   ○   ║");
            console.log("║       ║");
            console.log("╚═══════╝");
            console.log("")
            break
        case 1:
            console.log("╔═══════╗");
            console.log("║ ○     ║");
            console.log("║       ║");
            console.log("║     ○ ║");
            console.log("╚═══════╝");
            console.log("")
            break
        case 2:
            console.log("╔═══════╗");
            console.log("║ ○     ║");
            console.log("║   ○   ║");
            console.log("║     ○ ║");
            console.log("╚═══════╝");
            console.log("")
            break
        case 3:
            console.log("╔═══════╗");
            console.log("║ ○   ○ ║");
            console.log("║       ║");
            console.log("║ ○   ○ ║");
            console.log("╚═══════╝");
            console.log("")
            break
        case 4:
            console.log("╔═══════╗");
            console.log("║ ○   ○ ║");
            console.log("║   ○   ║");
            console.log("║ ○   ○ ║");
            console.log("╚═══════╝");
            console.log("")
            break
        case 5:
            console.log("╔═══════╗");
            console.log("║ ○   ○ ║");
            console.log("║ ○   ○ ║");
            console.log("║ ○   ○ ║");
            console.log("╚═══════╝");
            console.log("")
            break
    }
    escolha = read.question("Deseja jogar novamente(s/n)? ")
} while (escolha === "s")