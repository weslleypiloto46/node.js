/**
 * Simples carrossel de imagem
 * @autor Weslley Carlos
 */
/*           [0]         [1]       [2]     */
let slides=["slide1.jpg","slide2.jpg","slide3.jpg"]
/*
console.log(slides[0])
console.log(slides.length)
*/

let intervalo = 3000
let indice = 0

//execultar a funçao dentro do arquivo slideshow.js
show()

function show() {
    //adicionar efeito de transiçao (classe FadeOut do CSS no html)
    document.getElementById("slide").className += "FadeOut"
    // nova funçao anonima para alterna o efeito fade a cada 1 segundo
    setTimeout(function () {
        document.getElementById("slide").src = (`assets/${slides[indice]}`)
        document.getElementById("slide").className = "" /* no html remove a classe fadeout*/
    }, 1000)

   
    indice++
    if (indice === slides.length) {
        indice = 0
    }

    //trocar o slide a cada 3 segundos
    setTimeout(show, intervalo)
}