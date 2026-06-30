/**
 * Helper statico per effettuare le operazioni CRUD verso un'API.
 */
export default class ApiCrud {
    /**
     * Recupera tutti i record dall'endpoint specificato.
     *
     * @param {string} url - URL dell'endpoint.
     * @returns {Promise<Object[]|undefined>} I dati JSON restituiti dall'API, oppure undefined in caso di errore.
     */
    static getAll(url: any): Promise<any>;
    /**
     * Recupera un singolo record per ID.
     *
     * @param {string} url - URL dell'endpoint.
     * @param {number|string} id - ID della risorsa da recuperare.
     * @returns {Promise<Object|undefined>} I dati JSON dell'elemento, oppure undefined in caso di errore.
     */
    static getById(url: any, id: any): Promise<any>;
    /**
     * Crea una nuova risorsa sull'endpoint.
     *
     * @param {string} url - URL dell'endpoint.
     * @param {Object} entry - Dati dell'elemento da creare.
     * @returns {Promise<Object|undefined>} La risorsa creata, oppure undefined in caso di errore.
     */
    static create(url: any, entry: any): Promise<any>;
    /**
     * Aggiorna una risorsa esistente sull'endpoint.
     *
     * @param {string} url - URL dell'endpoint.
     * @param {Object} entry - Dati della risorsa da aggiornare.
     * @returns {Promise<Object|undefined>} La risorsa aggiornata, oppure undefined in caso di errore.
     */
    static update(url: any, entry: any): Promise<any>;
    /**
     * Elimina una risorsa dall'endpoint.
     *
     * @param {string} url - URL dell'endpoint.
     * @param {number|string} id - ID della risorsa da eliminare.
     * @returns {Promise<Object|undefined>} La risposta dell'eliminazione, oppure undefined in caso di errore.
     */
    static delete(url: any, id: any): Promise<any>;
}
//# sourceMappingURL=ApiCrud.d.ts.map