const icone = ['🦊', '🐶', '🐱', '🐸', '🐵', '🐼', '🐷', '🦁'];
//duplicare le icone
icone.push(...icone);

//mescolare le icone
function shuffle() {

    const arrayDaMescolare = [...icone];

    //2. creazione array risultato
    const arrayRisultato = [];

    while (arrayDaMescolare.length > 0) {
        //3.generare un indice randomico per ogni elemento presente nell'array
        const indiceRandomico = Math.floor(Math.random() * arrayDaMescolare.length);//genero indice random

        //4.usare l'indice per estrapolare un elemento dall'array, eliminandolo dall'array
        const elemento = arrayDaMescolare[indiceRandomico];//prelevo un elemento dall'array usando l'indice random
        arrayDaMescolare.splice(indiceRandomico, 1);//elimino l'elemento appena prelevato, per evitare che venga ripescato (1 è la quantità di elemento che vuoi eliminare)

        //5. mettere l'elemento estrapolato nell'array del risultato
        arrayRisultato.push(elemento);
    }

    //6. restituire l'array del risultato
    return arrayRisultato
}


const iconeMescolate = shuffle(icone);

console.log(icone);
console.log(iconeMescolate);

// creare una card per ogni icona
const memory = document.getElementById('memory');

iconeMescolate.forEach(i => {

    const card = document.createElement('div');
    const icon = document.createElement('div');

    card.classList.add('card-item')
    icon.classList.add('icon')

    icon.textContent = i;

    card.append(icon);
    memory.append(card);

    card.addEventListener('click', function () {
        card.classList.add('flipped');
        confronta(card);
    })

})


let arrayConfronto = [];
function confronta(cardCliccata) {

    arrayConfronto.push(cardCliccata);

    if (arrayConfronto.length === 2) {//quando ho cliccato la seconda card

        const [primaCard, secondaCard] = arrayConfronto;
        if (primaCard.innerText != secondaCard.innerText) {
            //timer per dare all'utente il tempo di vedere cosa ha cliccato prima di rigirare le card
            setTimeout(() => {
                //siccome le classi sono diverse va rimossa la classe flipped per nasconderle nuovamente
                primaCard.classList.remove('flipped');
                secondaCard.classList.remove('flipped');
                //svuoto l'array di confronto così sono pronto a confrontare altre 2 card
            }, 2000)
        } else {
            primaCard.style.visibility = "hidden";
            secondaCard.style.visibility = "hidden";
        }
        arrayConfronto = [];

    }

}