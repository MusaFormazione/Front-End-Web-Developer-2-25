
const pizze = [];

let pizza = {
    id:1,
    gusto:"Diavola",
    prezzo: 1,
    disponibile: true
}
let pizza2 = {
    id:2,
    gusto:"Margherita",
    prezzo: 5,
    disponibile: true
}
let pizza3 = {
    id:3,
    gusto:"Marinara",
    prezzo: 4,
    disponibile: true
}





//aggiunta
pizze.push(pizza, pizza2, pizza3);

console.log(pizze);



//rimozione

const indice = 1;//indice della pizza che vuoi eliminare
const quantità = 1//quante pizze vuoi eliminare a partire dall'indice fornito

pizze.splice(indice, quantità);
console.log(pizze);


//aggiornamento

let pizzaAggiornata = {
    id:3,
    gusto:"Marinara",
    prezzo: 3,
    disponibile: true
}

pizze.splice(1, 1, pizzaAggiornata);

console.log(pizze);
