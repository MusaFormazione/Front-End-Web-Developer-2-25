// ========================================
// LEZIONE 40 - ESERCIZI
// Costruire il DOM con createElement
// ========================================
// Metodi da usare: createElement, textContent, appendChild
//                  className, querySelector
// ========================================

// Array di partenza - NON modificarlo
const prodotti = [
    { nome: "Mouse Wireless", prezzo: 19.99, disponibile: true },
    { nome: "Tastiera Meccanica", prezzo: 59.9, disponibile: false },
    { nome: "Monitor 24 pollici", prezzo: 149.0, disponibile: true },
    { nome: "Webcam HD", prezzo: 34.5, disponibile: true },
];


// ==================
// ESERCIZIO 1 - CREARE UNA LISTA DI CARD DAL ARRAY
// ==================
// Obiettivo: partendo dall'array "prodotti", costruisci dinamicamente
// il contenuto del div con id "lista-prodotti" usando createElement.
//
// Requisiti:
// 1. Seleziona il contenitore "#lista-prodotti".
// 2. Per ogni elemento dell'array, crea un div con classe "card-prodotto".
// 3. Dentro ogni card inserisci:
//    - un h3 con il nome del prodotto
//    - un p con il prezzo nel formato "Prezzo: 19.99 EUR"
//    - un p con la disponibilita':
//      "Disponibile" se disponibile === true
//      "Non disponibile" se disponibile === false
// 4. Aggiungi ogni card al contenitore usando appendChild.
// 5. Se il prodotto non e' disponibile, aggiungi alla card anche
//    la classe "non-disponibile" (es. card.className = "...").
//
// Esempio struttura HTML attesa per UNA card:
// <div class="card-prodotto">
//   <h3>Mouse Wireless</h3>
//   <p>Prezzo: 19.99 EUR</p>
//   <p>Disponibile</p>
// </div>
//
// Se il prodotto non e' disponibile:
// <div class="card-prodotto non-disponibile">
//   <h3>Tastiera Meccanica</h3>
//   <p>Prezzo: 59.90 EUR</p>
//   <p>Non disponibile</p>
// </div>
//
// Vincolo:
// - Non usare innerHTML per costruire le card.
// - Usa solo createElement + textContent + appendChild.
