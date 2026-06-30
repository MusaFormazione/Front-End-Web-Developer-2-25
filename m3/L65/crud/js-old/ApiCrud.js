import call from './call.js';

/**
 * Helper statico per effettuare le operazioni CRUD verso un'API.
 */
export default class ApiCrud{

    /**
     * Recupera tutti i record dall'endpoint specificato.
     *
     * @param {string} url - URL dell'endpoint.
     * @returns {Promise<Object[]|undefined>} I dati JSON restituiti dall'API, oppure undefined in caso di errore.
     */
    static async getAll(url){

        try{
            const data = await call(url,'GET');

            return data;        
        }catch(err){
            console.error(err);
        }

    }

    /**
     * Recupera un singolo record per ID.
     *
     * @param {string} url - URL dell'endpoint.
     * @param {number|string} id - ID della risorsa da recuperare.
     * @returns {Promise<Object|undefined>} I dati JSON dell'elemento, oppure undefined in caso di errore.
     */
    static async getById(url, id){
        try{
            const data = await call(`${url}/${id}`,'GET');

            return data;        
        }catch(err){
            console.error(err);
        }
    }

    /**
     * Crea una nuova risorsa sull'endpoint.
     *
     * @param {string} url - URL dell'endpoint.
     * @param {Object} entry - Dati dell'elemento da creare.
     * @returns {Promise<Object|undefined>} La risorsa creata, oppure undefined in caso di errore.
     */
    static async create(url, entry){
        try{
            const data = await call(url,'POST', entry);

            return data;        
        }catch(err){
            console.error(err);
        }
    }

    /**
     * Aggiorna una risorsa esistente sull'endpoint.
     *
     * @param {string} url - URL dell'endpoint.
     * @param {Object} entry - Dati della risorsa da aggiornare.
     * @returns {Promise<Object|undefined>} La risorsa aggiornata, oppure undefined in caso di errore.
     */
    static async update(url, entry){
        try{
            const data = await call(`${url}/${entry.id}`,'PUT', entry);

            return data;        
        }catch(err){
            console.error(err);
        }
    }

    /**
     * Elimina una risorsa dall'endpoint.
     *
     * @param {string} url - URL dell'endpoint.
     * @param {number|string} id - ID della risorsa da eliminare.
     * @returns {Promise<Object|undefined>} La risposta dell'eliminazione, oppure undefined in caso di errore.
     */
    static async delete(url, id){
        try{
            const data = await call(`${url}/${id}`,'DELETE');      
            return data;
        }catch(err){
            console.error(err);
        }
    }

}