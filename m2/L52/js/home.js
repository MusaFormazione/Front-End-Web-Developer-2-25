const tabellaPizze = document.getElementById('tabella-pizze');
//mostrare lista pizze
fetch('http://localhost:3000/pizzas')
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);

        return response.json()
    })
    .then(pizze => {

        pizze.forEach(p => {
            const {id,prezzo,gusto,disponibile} = p;
            const tr = document.createElement('tr');//creo la riga
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const tdAzioni = document.createElement('td');
            const btnElimina = document.createElement('button');
            const linkModifica = document.createElement('a');

            td1.innerText = id;
            td2.innerText = gusto;
            td3.innerText = prezzo;
            td4.innerText = disponibile ? 'Si' : 'No';

            btnElimina.innerText = 'Elimina';
            linkModifica.innerText = 'Modifica';


            btnElimina.classList.add('btn', 'btn-danger');
            linkModifica.classList.add('btn', 'btn-warning');


            btnElimina.addEventListener('click',function(){
                //eliminazione lato server
                fetch(`http://localhost:3000/pizzas/${id}`,{
                    method:'DELETE'
                })
                .then(response => {
                    if (!response.ok) throw new Error(response.statusText);

                    return response.json()
                })
                .then(res => {
                    tr.remove()//eliminazione visiva
                    Swal.fire({
                        icon:'success',
                        title: 'Pizza Eliminata'
                    })
                })
            })
            linkModifica.href = `./modifica-pizza.html?id=${id}`;

            tdAzioni.append(btnElimina, linkModifica);
            tr.append(td1,td2,td3,td4,tdAzioni);

            tabellaPizze.append(tr);
        })

    })


//aggiunta pizze
const form = document.getElementById('form-crea-pizza');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const gustoInput = document.getElementById('gusto');
    const prezzoInput = document.getElementById('prezzo');
    const disponibileInput = document.getElementById('disponibile');

    if (!gustoInput.value || !prezzoInput.value) {
        Swal.fire({
            title: "Compila tutti i campi",
            text: "Gusto e prezzo sono obbligatori"
        })
        return;//blocca la funzione
    }

    const newPizza = {
        gusto: gustoInput.value,
        prezzo: Number(prezzoInput.value),
        disponibile: disponibileInput.checked
    }

    fetch('http://localhost:3000/pizzas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPizza)
    })
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);

            return response.json()
        })
        .then(pizza => {

            const {id,prezzo,gusto,disponibile} = pizza;
            const tr = document.createElement('tr');//creo la riga
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const tdAzioni = document.createElement('td');
            const btnElimina = document.createElement('button');
            const linkModifica = document.createElement('a');

            td1.innerText = id;
            td2.innerText = gusto;
            td3.innerText = prezzo;
            td4.innerText = disponibile ? 'Si' : 'No';

            btnElimina.innerText = 'Elimina';
            linkModifica.innerText = 'Modifica';


            btnElimina.classList.add('btn', 'btn-danger');
            linkModifica.classList.add('btn', 'btn-warning');


            btnElimina.addEventListener('click',function(){
                //eliminazione lato server
                fetch(`http://localhost:3000/pizzas/${id}`,{
                    method:'DELETE'
                })
                .then(response => {
                    if (!response.ok) throw new Error(response.statusText);

                    return response.json()
                })
                .then(res => {
                    tr.remove()//eliminazione visiva
                    Swal.fire({
                        icon:'success',
                        title: 'Pizza Eliminata'
                    })
                })
            })
            linkModifica.href = `./modifica-pizza.html?id=${id}`;

            tdAzioni.append(btnElimina, linkModifica);
            tr.append(td1,td2,td3,td4,tdAzioni);

            tabellaPizze.append(tr);

            Swal.fire({
                title: "Successo!",
                text: `Pizza ${pizza.gusto} aggiunta`
            })
        })
        // .catch(err => {
        //     Swal.fire({
        //         icon: 'error',
        //         title: "Errore!",
        //         text: `Si è verificato un problema nell'aggiunta della pizza`
        //     })
        //     console.error('Errore nella richiesta')
        // })

})


