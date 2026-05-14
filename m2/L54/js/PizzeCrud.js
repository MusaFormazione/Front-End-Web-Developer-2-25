import ApiCrud from "./ApiCrud.js";
import Pizza from "./models/Pizza.js";

export default class PizzeCrud {

    constructor() {
        this.url = 'http://localhost:3000/pizzas';
        this.tabellaPizze = document.getElementById('tabella-pizze');
        this.buildPizzasList();
        this.form = document.getElementById('form-crea-pizza');
    }

    async buildPizzasList(){

        const pizzas = await ApiCrud.getAll(this.url);

        pizzas.forEach(p => {
            this.createPizzaTr(p);
        })
    }

    createPizzaTr(pizza) {

        const { id, prezzo, gusto, disponibile } = pizza;

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


        btnElimina.addEventListener('click', () => this.deletePizzaTr(id, tr))
        linkModifica.href = `./modifica-pizza.html?id=${id}`;

        tdAzioni.append(btnElimina, linkModifica);
        tr.append(td1, td2, td3, td4, tdAzioni);

        this.tabellaPizze.append(tr);

    }

    async deletePizzaTr(id, tr) {
        await ApiCrud.delete(this.url, id)

        tr.remove()//eliminazione visiva
        Swal.fire({
            icon: 'success',
            title: 'Pizza Eliminata'
        })
    }

    setupCreateFormAction(){
        const form = document.getElementById('form-crea-pizza');
        if(!form) throw new Error('Form non trovato');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const gustoInput = document.getElementById('gusto');
            const prezzoInput = document.getElementById('prezzo');
            const disponibileInput = document.getElementById('disponibile');

            if(!gustoInput || !prezzoInput || !disponibileInput) throw new Error('Mancano i campi con id "gusto","prezzo","disponibile" all\'interno del form')

            if (!gustoInput.value || !prezzoInput.value) {
                Swal.fire({
                    title: "Compila tutti i campi",
                    text: "Gusto e prezzo sono obbligatori"
                })
                return;//blocca la funzione
            }

            let newPizza = new Pizza(gustoInput.value, prezzoInput.value, disponibileInput.checked);

            ApiCrud.create(this.url, newPizza)
            .then(pizza => this.createPizzaTr(pizza));


        });
    }

}