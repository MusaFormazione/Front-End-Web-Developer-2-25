import ApiCrud from "./ApiCrud.js";
import Pizza from "./models/Pizza.js";

/**
 * Gestisce le operazioni CRUD sulle pizze e coordina la loro visualizzazione e modifica nella UI.
 * La classe carica le pizze dall'API, costruisce le righe della tabella, gestisce la creazione,
 * l'eliminazione e la modifica delle pizze tramite i form e i pulsanti dell'interfaccia.
 * I form non sono attivati automaticamente: devono essere inizializzati esplicitamente
 * chiamando metodi come `activateCreateForm()` o `setupEditForm()`.
 */
export default class PizzeCrud {

    /**
     * Inizializza l'endpoint API e gli elementi DOM usati per la visualizzazione.
     */
    constructor() {
        this.url = 'http://localhost:3000/pizzas';
        this.tabellaPizze = document.getElementById('tabella-pizze');
        if(this.tabellaPizze) this.buildPizzasList();
        this.form = document.getElementById('form-crea-pizza');
    }

    /**
     * Recupera tutte le pizze dall'API e le aggiunge alla tabella HTML.
     * @returns {Promise<void>}
     */
    async buildPizzasList() {

        const pizzas = await ApiCrud.getAll(this.url);

        pizzas.forEach(p => {
            this.createPizzaTr(p);
        })
    }

    /**
     * Crea una riga HTML per una pizza e la aggiunge alla tabella principale.
     * @param {{id:number|string, gusto:string, prezzo:number|string, disponibile:boolean}} pizza - Dati della pizza.
     * @returns {void}
     */
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

    /**
     * Elimina una pizza dall'API e rimuove la riga corrispondente dalla tabella.
     * @param {number|string} id - L'ID della pizza da eliminare.
     * @param {HTMLTableRowElement} tr - La riga della tabella da rimuovere.
     * @returns {Promise<void>}
     */
    async deletePizzaTr(id, tr) {
        await ApiCrud.delete(this.url, id)

        tr.remove()//eliminazione visiva
        Swal.fire({
            icon: 'success',
            title: 'Pizza Eliminata'
        })
    }

    /**
     * Attiva il listener per il form di creazione di una nuova pizza.
     * @returns {void}
     */
    activateCreateForm() {
        const form = this.getForm('form-crea-pizza');
        if(!form) throw new Error('Form non trovato');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const [gustoInput, prezzoInput, disponibileInput] = this.getFormInputs();

            if (!gustoInput.value || !prezzoInput.value) {
                Swal.fire({
                    title: "Compila tutti i campi",
                    text: "Gusto e prezzo sono obbligatori"
                })
                return;//blocca la funzione
            }

            let newPizza = new Pizza(gustoInput.value, prezzoInput.value, disponibileInput.checked);

            ApiCrud.create(this.url, newPizza)
            .then(pizza => {
                this.createPizzaTr(pizza)
                Swal.fire({
                   icon:"success",
                   title: "Successo!",
                   text: `Pizza ${pizza.gusto} aggiunta`
               })
               form.reset();
            });

        });
    }

    /**
     * Prepara il form di modifica con i dati della pizza selezionata.
     * @returns {Promise<void>}
     */
    async setupEditForm() {
        const id = this.getIdFromUrl();
        const [gustoInput, prezzoInput, disponibileInput] = this.getFormInputs();

        const pizza = await ApiCrud.getById(this.url, id)

        gustoInput.value = pizza.gusto;
        prezzoInput.value = pizza.prezzo;
        disponibileInput.checked = pizza.disponibile


        const form = this.getForm('form-modifica-pizza');

        form.addEventListener('submit',e => {
            e.preventDefault();

            const updatedPizza = new Pizza(gustoInput.value, prezzoInput.value, disponibileInput.checked, id);
            ApiCrud.update(this.url, updatedPizza)
            .then(() => {
                 Swal.fire({
                    icon:"success",
                    title: "Pizza aggiornata",
                    html: "<a href=\"./index.html\" class=\" btn btn-primary \">Torna alla home</a>"
                })
            })
        });
    }

    /**
     * Ottiene l'ID della pizza dai parametri dell'URL.
     * @returns {string} L'ID della pizza.
     */
    getIdFromUrl(){
        const url = new URLSearchParams(location.search);

        if (!url.has('id')) location.href = './index.html';//se non c'è id mando l'utente alla home

        return url.get('id');
    }

    /**
     * Restituisce i riferimenti agli input del form.
     * @returns {[HTMLInputElement, HTMLInputElement, HTMLInputElement]}
     */
    getFormInputs() {
        const gustoInput = document.getElementById('gusto');
        const prezzoInput = document.getElementById('prezzo');
        const disponibileInput = document.getElementById('disponibile');

        if(!gustoInput || !prezzoInput || !disponibileInput) throw new Error('Mancano i campi con id "gusto","prezzo","disponibile" all\'interno del form')

        return  [gustoInput, prezzoInput, disponibileInput]
    }

    /**
     * Restituisce l'elemento form dal DOM dato il suo ID.
     * @param {string} selector - L'ID del form.
     * @returns {HTMLFormElement}
     */
    getForm(selector) {
        const form = document.getElementById(selector);
        if(!form) throw new Error(`Form #${selector} non trovato`);
        return form;
    }

}