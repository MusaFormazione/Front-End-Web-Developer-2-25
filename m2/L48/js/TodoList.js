/**
 * Gestisce una lista di todo con persistenza su localStorage e rendering DOM automatico.
 */
export default class TodoList {

    /**
     * @param {string} selector - Selettore CSS dell'elemento contenitore della lista.
     * @throws {Error} Se il selettore non corrisponde a nessun elemento nel DOM.
     */
    constructor(selector) {
        this.target = document.querySelector(selector);
        this.key = `${this.target.id}-todolist`;

        if(!this.target){
            //lancio un errore personalizzato e visibile in console, in modo da informare in modo esplicito chi scrive il codice, che qualcosa è andato storto
            throw new Error("La classe TodoList ha un errore, controlla il selettore che hai utilizzato");
        }

        this.input = null;
        this.button = null;
        this.htmlList = null;
        this.initHTML();


        this.db = this.getAllTodos();
        this.buildHTMLList();
    }

    /**
     * Crea e inietta nel DOM l'input, il bottone di salvataggio e il contenitore della lista.
     * Collega il listener al bottone usando una arrow function per preservare il contesto `this`.
     */
    initHTML() {
        const input = document.createElement('input');
        const button = document.createElement('button');
        const htmlList = document.createElement('div');

        this.input = input;
        this.button = button;
        this.htmlList = htmlList;

        input.classList.add('form-control');
        button.classList.add('btn', 'btn-primary');

        input.placeholder = "Scrivi qualcosa...";
        button.innerText = "Salva";

        //All'interno di addEventListener se usi una funzione "function"
        //la parola chiave contestuale "this" si riferisce sempre
        //all'elemento su cui si è scatenato l'evento (In questo caso Button )
        //Però il metodo createNewtodo non è un metodo di button(oggetto DOM), è un metodo della classe TodoList in cui stiamo lavorando.
        //Per evitare quindi che this venga sovrascritto da addEventListener, usiamo una funzione freccia così che this sfugga a questo funzionamento default di javascript.
        button.addEventListener('click', () => {
            this.createNewTodo();
        })

        this.target.append(input, button, htmlList);
    }

    /**
     * Itera i todo salvati nel db e li renderizza nel DOM tramite {@link createNewTodo}.
     */
    buildHTMLList(){
        this.db.forEach(t => this.createNewTodo(t))
    }

    /**
     * Crea e aggiunge al DOM la card di un todo.
     * Se non viene passato `text`, legge il valore dall'input e salva il todo su localStorage.
     *
     * @param {string} [text] - Testo del todo. Se omesso viene usato il valore corrente dell'input.
     */
    createNewTodo(oldTodo) {
        const card = document.createElement('div');
        const todoTextArea = document.createElement('p')
        const deleteButton = document.createElement('button');

        if (!this.input.value && !oldTodo) {
            alert('Il campo non può essere vuoto');
            return;//blocco la funzione
        }

        todoTextArea.innerText = oldTodo?.text || this.input.value;
        deleteButton.innerText = "Elimina"

        deleteButton.classList.add('btn', 'btn-danger');
        card.classList.add('alert', 'alert-info');
        card.id =  oldTodo?.id;

        deleteButton.addEventListener('click', () => this.deleteTodo(card));

        card.append(todoTextArea, deleteButton);
        this.htmlList.append(card);

        if(!oldTodo) this.saveNewTodo();
    }

    /**
     * Rimuove fisicamente un elemento todo dal DOM.
     *
     * @param {HTMLElement} element - Il nodo DOM da rimuovere.
     */
    deleteTodoElement(element) {
        element.remove()

    }

    /**
     * Crea un nuovo {@link TodoElement}, lo aggiunge al db in memoria,
     * persiste su localStorage e svuota il campo input.
     */
    saveNewTodo(){
        const newTodo = new TodoElement(this.input.value);

        this.db.push(newTodo);

        this.updateLocalStorage();

        this.input.value = '';
    }

    /**
     * Rimuove un todo dal db in memoria tramite id e aggiorna localStorage.
     *
     * @param {string} id - UUID del todo da eliminare.
     */
    deleteTodo(id){
        this.db = this.db.filter(t => t.id != id)
        this.updateLocalStorage();
    }

    /**
     * Imposta `completed = true` per il todo con l'id specificato e aggiorna localStorage.
     *
     * @param {string} id - UUID del todo da segnare come completato.
     */
    setTodoCompleteStatus(id){
        this.db = this.db.map(t => {
            if(t.id === id){
                t.completed = true;
                return t;
            }
            return t;
        })
        this.updateLocalStorage();
    }

    /**
     * Serializza il db in JSON e lo salva su localStorage con la chiave dell'istanza.
     */
    updateLocalStorage(){
        const jsonDb = JSON.stringify(this.db);

        localStorage.setItem(this.key, jsonDb);
    }

    /**
     * Legge e deserializza i todo salvati su localStorage.
     *
     * @returns {TodoElement[]} Array di todo precedentemente salvati, o array vuoto se assenti.
     */
    getAllTodos(){
        const dbJson = localStorage.getItem(this.key);
        if(!dbJson) return [];

        return JSON.parse(dbJson);
    }

}

/**
 * Rappresenta un singolo elemento todo con id univoco, testo e stato di completamento.
 */
class TodoElement{
    /**
     * @param {string} text - Testo descrittivo del todo.
     * @param {boolean} [completed=false] - Stato iniziale di completamento.
     * @throws {Error} Se `text` è assente o `completed` non è definito.
     */
    constructor(text, completed = false){
        this.id = crypto.randomUUID();//id che servirà successivamente per gestire i todo

        if(!text || completed == undefined) throw new Error("Non è stato fornito un testo o uno status per questo todo");

        this.text = text;
        this.completed = completed;
    }
}


