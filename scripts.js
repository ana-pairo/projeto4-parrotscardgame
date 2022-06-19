function comparador() { 
	return Math.random() - 0.5; 
}

contador = 0;

let numeroDeCartas = prompt("De 4 a 14, com cartas você deseja jogar?")

while(numeroDeCartas%2!==0 || numeroDeCartas < 4 || numeroDeCartas >14) {
    numeroDeCartas = prompt("Por favor, digite um número par entre 4 e 14");
}

let minhaArray = [];

let mesa = document.querySelector(".cards");
    mesa.innerHTML="";

for(let i=0; i<numeroDeCartas/2; i++) {
    let distribuindo = `
    <div onclick="clicada(this)" class = "card">  <img class="front" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png" /> <img class="back imagem${i}" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${i}.gif" /></div>
    `
    minhaArray.push(distribuindo);
    minhaArray.push(distribuindo);

    

 }

 minhaArray.sort(comparador);

 mesa.innerHTML = minhaArray.join("");



 function clicada(elementoDiv) {

    if (elementoDiv.classList.contains("virada")==false && elementoDiv.classList.contains("acerto")== false && elementoDiv.classList.contains("primeira") == false && document.querySelector(".segunda")==null){

        contador ++;

        elementoDiv.classList.add("virada")
        let gif = elementoDiv.querySelector(".back");
        let parrotFront = elementoDiv.querySelector(".front");
        parrotFront.classList.add("hidden")
        gif.classList.add("appear");
      

      
        if (document.querySelector(".primeira") == null){
            elementoDiv.classList.add("primeira");
        }
        else {
            elementoDiv.classList.add("segunda");

            if (document.querySelector(".primeira >img:nth-child(2)").src == document.querySelector(".segunda >img:nth-child(2)").src) {
               document.querySelector(".primeira").classList.remove("primeira");
               document.querySelector(".segunda").classList.remove("segunda");
            }
            else {
                setTimeout(function(){ 
                        document.querySelector(".primeira .back").classList.remove("appear");
                document.querySelector(".segunda .back").classList.remove("appear");
   
                   document.querySelector(".primeira .front").classList.remove("hidden");
                document.querySelector(".segunda .front").classList.remove("hidden");
   
                   document.querySelector(".primeira").classList.remove("virada", "primeira");
                 document.querySelector(".segunda").classList.remove("virada", "segunda");
                }, 2000)
           
                
                
            }

            setTimeout(function(){
                if(document.querySelectorAll(".virada").length == numeroDeCartas){
                    alert(`Você ganhou em ${contador} jogadas!`);
                }
            }, 1500)



        }   


    
    }
 }


