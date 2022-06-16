let numeroDeCartas = prompt("Quantas cartas? 4 a 14")

let mesa = document.querySelector(".cards");
    mesa.innerHTML="";

for(let i=0; i<numeroDeCartas; i++) {
    let distribuindo = 
    `
    <div class = "card">  <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png" /> </div>
    `

    mesa.innerHTML += distribuindo;

}
