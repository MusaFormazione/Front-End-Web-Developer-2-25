import ApiCrud from "./ApiCrud.js";

export default class PizzeCrud {

    constructor() {
        this.url = 'http://localhost:3000/pizzas';
        this.tabellaPizze = document.getElementById('tabella-pizze');
        this.buildPizzasList();
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

        tabellaPizze.append(tr);

    }

    async deletePizzaTr(id, tr) {
        await ApiCrud.delete(this.url, id)

        tr.remove()//eliminazione visiva
        Swal.fire({
            icon: 'success',
            title: 'Pizza Eliminata'
        })
    }

}