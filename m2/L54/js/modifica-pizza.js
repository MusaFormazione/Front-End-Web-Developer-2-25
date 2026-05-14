//recuperiamo l'id dai query params
//Controlla l'Anteprima, vedrai che l'url della pagina appare così. 
//http://127.0.0.1:5500/modifica-pizza.html?id=[ID DELLA PIZZA CLICCATA]
//Non aprire direttamente l'Anteprima di questa pagina, perché altrimenti non funzionerà, ma comincia da INDEX.HTML naviga verso una pizza cliccando su modifica. 

const url = new URLSearchParams(location.search);

if (!url.has('id')) location.href = './index.html';//se non c'è id mando l'utente alla home

const id = url.get('id');//se c'è il query param adesso ho l'id

const gustoInput = document.getElementById('gusto');
const prezzoInput = document.getElementById('prezzo');
const disponibileInput = document.getElementById('disponibile');


fetch('http://localhost:3000/pizzas/' + id)
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);

        return response.json()
    })
    .then(pizza => {
        gustoInput.value = pizza.gusto;
        prezzoInput.value = pizza.prezzo;
        disponibileInput.checked = pizza.disponibile
    })


    const form = document.getElementById('form-modifica-pizza');

    form.addEventListener('submit',e => {
        e.preventDefault();

        const updatedPizza = {
            gusto: gustoInput.value,
            prezzo: prezzoInput.value,
            disponibile: disponibileInput.checked
        }

        fetch('http://localhost:3000/pizzas/' + id, {
            method: 'PUT',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(updatedPizza)
        })
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);

            return response.json()
        })
        .then(pizza => {

            Swal.fire({
                icon:"success",
                title: "Pizza aggiornata",
                html: "<a href=\"./index.html\" class=\" btn btn-primary \">Torna alla home</a>"
            })

        })

    })



