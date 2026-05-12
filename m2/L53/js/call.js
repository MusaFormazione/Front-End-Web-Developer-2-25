import Loader from "./Loader.js";

/**
 * Esegue una richiesta HTTP verso l'API specificata e mostra un loader durante l'operazione.
 *
 * @param {string} url - L'endpoint a cui inviare la richiesta.
 * @param {'GET'|'POST'|'PUT'|'DELETE'|'PATCH'} method - Il metodo HTTP da usare.
 * @param {Object} [payload] - Il corpo della richiesta, valido solo per POST e PUT.
 * @throws {Error} Se viene passato un payload per metodi diversi da POST o PUT.
 * @throws {Error} Se la risposta HTTP non è OK.
 * @returns {Promise<Object>} I dati JSON restituiti dalla risposta.
 */
export default async function call(url, method, payload){

    if( (method !== 'POST' && method !== 'PUT') && payload ){
        throw new Error('Non puoi inserire un payload per chiamate diverse da POST e PUT')
    }

    const options = {
        method,
        headers: {
            'Content-Type':'application/json',
        }
    }   

    if(payload){
        options.body = JSON.stringify(payload)
    }

    Loader.showLoader();
    const response = await fetch(url, options);

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();

    Loader.hideLoader();

    return data;
}