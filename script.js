var modal = document.querySelector("dialog")
var buttonClose = document.querySelector("dialog button")

function numb() {
    number = document.querySelector("#res").value;

}

function resul() {

    let s = document.getElementsByTagName("h2")[0].innerHTML = "O número sorteado foi..." + Math.floor(Math.random() * number + 1)

}
var listaNomes = []
function resNomes() {

    let nomes = document.querySelector("#lista").value
    nomes.split(",").forEach(element => {
        console.log(element)
        listaNomes.push(element)
    });
    console.log(listaNomes)
    var sorteio = listaNomes.length
    console.log("Tamanho do array é " + sorteio)
    var sorteado = listaNomes[Math.floor(Math.random()*sorteio)]

   
    alert("O nome sorteado foi... " + sorteado)

    listaNomes = []
};





