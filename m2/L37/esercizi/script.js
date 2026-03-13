// ========================================
// LEZIONE 37 - ESERCIZI
// CRUD su Array con Metodi Ciclici
// ========================================
// Metodi da usare: forEach, map, filter, reduce,
//                  find, findIndex, some, every
// NON usare cicli for / while / for...of
// ========================================

// Array di partenza - NON modificarlo mai direttamente
let studenti = [
    { id: 1, nome: "Mario",   cognome: "Rossi",    voto: 8 },
    { id: 2, nome: "Lucia",   cognome: "Bianchi",  voto: 6 },
    { id: 3, nome: "Paolo",   cognome: "Verdi",    voto: 9 },
    { id: 4, nome: "Anna",    cognome: "Neri",     voto: 5 },
    { id: 5, nome: "Giorgio", cognome: "Ferrari",  voto: 7 },
    { id: 6, nome: "Sara",    cognome: "Blu",      voto: 4 },
];


// ==================
// ESERCIZIO 1 (READ) - forEach: STAMPARE GLI STUDENTI
// ==================
// Usa forEach per stampare in console ogni studente nel formato:
// "Mario Rossi - Voto: 8"


// ==================
// ESERCIZIO 2 (READ) - find: CERCARE PER ID
// ==================
// Usa find per ottenere lo studente con id 3
// Stampa in console l'oggetto trovato
// Cosa viene restituito se cerchi un id che non esiste (es. id 99)? Prova e stampa il risultato


// ==================
// ESERCIZIO 3 (READ) - findIndex: TROVARE LA POSIZIONE
// ==================
// Usa findIndex per trovare l'indice dello studente con nome "Anna"
// Stampa in console: "Anna si trova all'indice X"
// Cosa viene restituito se il nome non esiste? Prova con "Luca" e stampa il risultato


// ==================
// ESERCIZIO 4 (READ) - filter: FILTRARE PER CONDIZIONE
// ==================
// Usa filter per ottenere un nuovo array con solo gli studenti che hanno voto >= 7
// Salva il risultato in una variabile "studentiPromossi"
// Stampa la variabile in console


// ==================
// ESERCIZIO 5 (READ) - some e every: VERIFICARE CONDIZIONI
// ==================
// Usa some per verificare se almeno uno studente ha voto 10
// Usa every per verificare se tutti gli studenti hanno voto >= 6 (tutti sufficienti)
// Stampa in console entrambi i risultati (true/false) con una descrizione


// ==================
// ESERCIZIO 6 (READ) - reduce: CALCOLARE LA MEDIA DEI VOTI
// ==================
// Usa reduce per sommare tutti i voti degli studenti
// Dividi la somma per il numero di studenti per ottenere la media
// Stampa in console: "Media della classe: X"


// ==================
// ESERCIZIO 7 (CREATE) - map: AGGIUNGERE UN CAMPO
// ==================
// Usa map per creare un nuovo array "studentiConEsito" in cui ogni oggetto è
// una copia dello studente con aggiunto il campo "promosso":
//   - true se il voto è >= 6
//   - false se il voto è < 6
// NON modificare l'array originale "studenti"
// Stampa il nuovo array in console


// ==================
// ESERCIZIO 8 (UPDATE) - map: AGGIORNARE TUTTI GLI ELEMENTI
// ==================
// Il professore decide di aggiungere 1 punto a tutti i voti (bonus)
// Usa map per creare un nuovo array "studentiConBonus" con i voti aggiornati
// I voti non possono superare 10: usa Math.min(voto + 1, 10) per non andare oltre
// NON modificare l'array originale "studenti"
// Stampa il nuovo array in console


// ==================
// ESERCIZIO 9 (UPDATE) - map: AGGIORNARE UN ELEMENTO SPECIFICO
// ==================
// Lo studente con id 4 (Anna) ha sostenuto il recupero e ora ha voto 7
// Usa map per creare un nuovo array "studentiAggiornati" in cui solo Anna
// ha il voto modificato a 7, tutti gli altri rimangono invariati
// Suggerimento: dentro map, usa una condizione sull'id per restituire
//   l'oggetto modificato oppure l'oggetto originale
// NON modificare l'array originale "studenti"
// Stampa il nuovo array in console e verifica che solo Anna sia cambiata


// ==================
// ESERCIZIO 10 (DELETE) - filter: RIMUOVERE UN ELEMENTO PER ID
// ==================
// Lo studente con id 6 (Sara) si è ritirata dal corso
// Usa filter per creare un nuovo array "studentiIscritti" senza Sara
// NON modificare l'array originale "studenti"
// Stampa il nuovo array in console e verifica che abbia 5 elementi


// ==================
// ESERCIZIO 11 (DELETE) - filter: RIMUOVERE PER CONDIZIONE
// ==================
// Rimuovi dal registro tutti gli studenti con voto < 6 (bocciati)
// Usa filter per creare un nuovo array "registroPromossi"
// NON modificare l'array originale "studenti"
// Stampa in console il nuovo array e il numero di studenti rimasti


// ==================
// ESERCIZIO 12 (PIPELINE) - Combinare più metodi
// ==================
// Partendo dall'array originale "studenti", in una sola catena di metodi:
//   1. Filtra solo gli studenti con voto >= 7
//   2. Trasforma ogni risultato in una stringa nel formato "Mario Rossi (8)"
//   3. Salva il risultato in "reportEccellenti"
// Stampa "reportEccellenti" in console
// Risultato atteso: array di stringhe con solo gli studenti con voto alto
