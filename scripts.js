function comparador() { 
	return Math.random() - 0.5; 
}


let numeroDeCartas = prompt("De 0 a 14, com cartas você deseja jogar?")

while(numeroDeCartas%2!==0 || numeroDeCartas < 4 || numeroDeCartas >14) {
    numeroDeCartas = prompt("Por favor, digite um número par entre 4 e 14");
}
console.log(numeroDeCartas)

let minhaArray = [];

let mesa = document.querySelector(".cards");
    mesa.innerHTML="";

for(let i=0; i<numeroDeCartas/2; i++) {
    let distribuindo = `
    <div class = "card">  <img class="front" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png" /> <img class="back appear" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${i}.gif" /></div>
    `
    minhaArray.push(distribuindo);
    minhaArray.push(distribuindo);

    

 }

 minhaArray.sort(comparador);
 console.log(minhaArray.join(""))

 mesa.innerHTML = minhaArray.join("");


