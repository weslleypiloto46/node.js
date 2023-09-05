/** 
 * Cálculo do volume de um aquário
 */

const read = require('readline-sync')

let comprimento, altura, largura, volume

console.clear()
console.log("Cálculo do volume de um aquário")

comprimento = Number(read.question("Digite o comprimento do aquario em cm: ").replace(",", "."))

largura = Number(read.question("Digite o largura do aquario em cm: ").replace(",", "."))

altura = Number(read.question("Digite o altura do aquario em cm: ").replace(",", "."))

volume = ((comprimento * largura) * altura) / 1000

console.log(`volume: ${volume.toFixed(2)} L`)

