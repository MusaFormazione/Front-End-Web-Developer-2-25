// ========================================
// LEZIONE 31 - ESERCIZI
// Array, Oggetti e Funzioni
// ========================================

// ==================
// ESERCIZIO 1: FUNZIONE SEMPLICE
// ==================
// Crea una funzione chiamata "saluta" che non prende parametri
// La funzione deve stampare "Ciao a tutti!" in console
// Chiama la funzione per testarla

function saluta(){
    console.log("Ciao a tutti!");
}

saluta();


// ==================
// ESERCIZIO 2: FUNZIONE CON PARAMETRO
// ==================
// Crea una funzione chiamata "salutaPersona" che prende un parametro "nome"
// La funzione deve stampare "Ciao [nome]!" (es: "Ciao Mario!")
// Chiama la funzione con almeno 2 nomi diversi

function salutaPersona(nome){
    console.log("Ciao " + nome + "!");
}

salutaPersona("Kevin");
salutaPersona("Angelo");
salutaPersona("Lucrezia");


// ==================
// ESERCIZIO 3: FUNZIONE CON RETURN
// ==================
// Crea una funzione chiamata "somma" che prende due parametri "a" e "b"
// La funzione deve RESTITUIRE la somma di a e b
// Chiama la funzione e salva il risultato in una variabile, poi stampala

function somma(a,b){
    return a + b;
}

const res = somma(2,2);
console.log(res);

// ==================
// ESERCIZIO 4: ARRAY - PUSH E POP
// ==================
// Crea un array vuoto chiamato "colori"
// Usa push() per aggiungere 3 colori all'array
// Stampa l'array
// Usa pop() per rimuovere l'ultimo colore
// Stampa di nuovo l'array

let colori = [];

colori.push("Rosso","Nero","Blu");
console.log(colori);

colori.pop();
console.log(colori);

// ==================
// ESERCIZIO 5: ARRAY - SHIFT E UNSHIFT
// ==================
// Crea un array "numeri" con i valori [10, 20, 30]
// Usa unshift() per aggiungere il numero 5 all'inizio
// Usa shift() per rimuovere il primo elemento
// Stampa l'array dopo ogni operazione

let numeri = [10,20,30];
numeri.unshift(5)

console.log(numeri);
numeri.shift()
console.log(numeri);


// ==================
// ESERCIZIO 6: ARRAY - SLICE
// ==================
// Crea un array "animali" con almeno 5 animali
// Usa slice() per creare un nuovo array con solo i primi 3 animali
// Stampa entrambi gli array (l'originale e quello nuovo)


// ==================
// ESERCIZIO 7: ARRAY - JOIN
// ==================
// Crea un array "parole" con le parole ["JavaScript", "è", "fantastico"]
// Usa join() con uno spazio come separatore per creare una frase
// Stampa la frase risultante

let parole = ["JavaScript", "è", "fantastico"];

//Ciò non modifica l'array originale. Ma genera un risultato alternativo sotto forma di stringa. 
const frase = parole.join(" ")

console.log(frase);

// ==================
// ESERCIZIO 8: ARRAY - CONCAT
// ==================
// Crea due array: "frutta1" con ["mela", "pera"] e "frutta2" con ["banana", "arancia"]
// Usa concat() per unire i due array in un nuovo array "tuttaLaFrutta"
// Stampa il risultato

const frutta1 = ["mela", "pera"];
const frutta2 = ["banana", "arancia"];

const tuttaLaFrutta = frutta1.concat(frutta2);
console.log(tuttaLaFrutta);


// ==================
// ESERCIZIO 9: ARRAY - INCLUDES
// ==================
// Crea un array "citta" con almeno 4 città
// Usa includes() per verificare se "Roma" è nell'array
// Usa includes() per verificare se "Parigi" è nell'array
// Stampa i risultati (true/false)

const città = ["Milano","Firenze","Napoli","Roma"];

console.log(città.includes("Milano"));
console.log(città.includes("Parigi"));

if(!città.includes("Reggio Emilia")){
    console.log("Non operiamo nella città che hai selezionato");
}

// ==================
// ESERCIZIO 10: ARRAY - INDEXOF
// ==================
// Crea un array "lettere" con ["a", "b", "c", "d", "e"]
// Usa indexOf() per trovare la posizione di "c"
// Usa indexOf() per cercare "z" (che non c'è)
// Stampa i risultati

const lettere = ["a", "b", "c", "d", "e"];

const posC = lettere.indexOf("c")
console.log(posC);
const posZ = lettere.indexOf("z")
console.log(posZ);

if(lettere.indexOf("z") === -1){
    console.log("La lettera cercata non è presente nella lista");
}

// ==================
// ESERCIZIO 11: OGGETTO SEMPLICE
// ==================
// Crea un oggetto "persona" con le proprietà:
// - nome: il tuo nome
// - eta: la tua età
// - citta: la tua città
// Stampa l'intero oggetto
// Stampa solo la proprietà "nome" usando la dot notation


// ==================
// ESERCIZIO 12: OGGETTO CON METODO
// ==================
// Crea un oggetto "calcolatrice" con:
// - una proprietà "marca" (es: "Casio")
// - un metodo "somma" che prende due parametri e restituisce la loro somma
// Chiama il metodo somma e stampa il risultato

const calcolatrice = {
    marca: "Casio",
    somma: function(a,b){
        return a + b;
    }
}

console.log(calcolatrice.somma(3,7));


// ==================
// ESERCIZIO 13: OGGETTO CON THIS
// ==================
// Crea un oggetto "studente" con:
// - proprietà: nome, voto
// - metodo "stampaInfo" che usa "this" per stampare "Nome: [nome], Voto: [voto]"
// Chiama il metodo stampaInfo

const studente = {
    nome: "Mario",
    voto:8,
    stampaInfo: function(){
        console.log(`Nome: ${this.nome}, Voto: ${this.voto}`);
    }
}

studente.stampaInfo();

// ==================
// ESERCIZIO 14: ARRAY DI OGGETTI
// ==================
// Crea un array "libri" con 3 oggetti libro, ogni libro ha:
// - titolo (stringa)
// - autore (stringa)
// - pagine (numero)
// Stampa l'intero array
// Stampa solo il titolo del secondo libro


// ==================
// ESERCIZIO 15: FUNZIONE CHE RESTITUISCE OGGETTO
// ==================
// Crea una funzione "creaPersona" che prende due parametri: nome ed età
// La funzione deve restituire un oggetto con le proprietà nome ed età
// Chiama la funzione e salva il risultato in una variabile
// Stampa l'oggetto creato

function creaPersona(nome,età){
    const persona = {
        nome:nome,
        età:età
    }
    return età;
}

function creaPersonaVersioneBreve(nome,età){
    //In questa funzione abbiamo il parametro nome e il parametro età che vanno assegnati ai parametri omonimi di un nuovo oggetto
    //Quando ha la proprietà di un oggetto, assegni una variabile che ha lo stesso nome, puoi usare una forma contratta Come quella che vedi qui sotto .
    /*
    {
        nome:nome,
        età:età
    }

    DIVENTA

    {
    nome,
    età
    }

    */
    return {nome,età}
}


// ==================
// ESERCIZIO 16: OGGETTO CON METODO CHE USA ARRAY
// ==================
// Crea un oggetto "classe" con:
// - proprietà "studenti" (array di nomi)
// - metodo "aggiungiStudente" che prende un nome e lo aggiunge all'array
// - metodo "contaStudenti" che restituisce il numero di studenti
// Aggiungi alcuni studenti e stampa il conteggio


// ==================
// ESERCIZIO 17: OGGETTO CON PIÙ METODI
// ==================
// Crea un oggetto "contoBancario" con:
// - proprietà "saldo" inizializzata a 1000
// - metodo "deposita" che prende un importo e lo aggiunge al saldo
// - metodo "preleva" che prende un importo e lo sottrae dal saldo
// - metodo "mostraSaldo" che stampa il saldo attuale
// Fai alcune operazioni e mostra il saldo finale