
const startBtn = document.querySelector('#start-btn');
if(startBtn){
    startBtn.addEventListener('click',startGame);
    //Essendo start game una funzione che possiede un nome non va invocata con le parentesi tonde perché è una callback, Una callback è una funzione che viene invocata da un'altra funzione. Se invece metti le parentesi tonde, quella verrà invocata al momento della lettura della riga quattro e al click non succederà niente.  
}

let arrayConfronto = [];
let cardComplete = 0;

/**
 * Dato un array qualsiasi, esegue fisher shuffle e restituisce array con valori mescolati
 * @param array l'array da mescolare 
 * @returns l'array mescolato
 */
function shuffle(array) {
    
    const arrayDaMescolare = [...array];
    
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


function startGame(){
    
    const icone = ['🦊', '🐶', '🐱', '🐸', '🐵', '🐼', '🐷', '🦁'];
    //duplicare le icone
    icone.push(...icone);
    
    const iconeMescolate = shuffle(icone);
    
    // creare una card per ogni icona
    toggleMessage()
    arrayConfronto = [];

    const memory = document.getElementById('memory');
    memory.querySelectorAll('.card-item')
    .forEach(c => c.remove())//rimuovo eventuali card preesistenti

    time();//avvia il timer
    
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
}




function confronta(cardCliccata) {

    arrayConfronto.push(cardCliccata);

    if (arrayConfronto.length === 2) {//quando ho cliccato la seconda card

        const memory = document.getElementById('memory');
        memory.classList.add('no-click')//Aggiungo questa classe al memory per bloccare i click sulle altre caselle 

        const [primaCard, secondaCard] = arrayConfronto;
        if (primaCard.innerText != secondaCard.innerText) {
            //timer per dare all'utente il tempo di vedere cosa ha cliccato prima di rigirare le card
            setTimeout(() => {
                //siccome le classi sono diverse va rimossa la classe flipped per nasconderle nuovamente
                primaCard.classList.remove('flipped');
                secondaCard.classList.remove('flipped');
                //svuoto l'array di confronto così sono pronto a confrontare altre 2 card
                memory.classList.remove('no-click')//Riabilito il clic su tutte le caselle 
            }, 1000)
        } else {
            primaCard.classList.add('correct')
            secondaCard.classList.add('correct')
            memory.classList.remove('no-click')//Riabilito il clic su tutte le caselle 
            cardComplete += 2;

            if(cardComplete == 16){
                toggleMessage();
                time(true)
            }
        }
        arrayConfronto = [];

    }

}


function toggleMessage(){
    const startGameMessage = document.getElementById('start-game-message');
    startGameMessage.classList.toggle('started')
}

/**
 * Gestisce avvio e stop della funzione
 */
let timer;
let conteggio = 0;
function time(stop = false){
    const timeElement = document.getElementById('time');

    if(stop){
        clearInterval(timer)//ferma l'intervallo
        saveScore('Michele', conteggio)
        conteggio = 0;
    }else{
        timer = setInterval(()=>{
            conteggio++;
            timeElement.textContent = conteggio;
        },1000)
    }
}

const punteggi = getScores();

function saveScore(nome, tempo){

    const data = new Date();

    const datiPunteggio = {
        data,
        nome,
        tempo
    }
    punteggi.push(datiPunteggio)

    const punteggiJson = JSON.stringify(punteggi);
    localStorage.setItem('punteggi', punteggiJson)

}

function getScores(){
    const punteggiJson = localStorage.getItem('punteggi');//cerco i punteggi in localstorage
    if(!punteggiJson) return []; //se non esistono restituisco un array vuoto

    // ma se esistono restituisco l'array di oggetti dei punteggi
    return JSON.parse(punteggiJson)
}