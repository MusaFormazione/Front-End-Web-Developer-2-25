// import Loader from "./Loader.js";
/**
 * Esegue una richiesta HTTP verso l'API specificata e mostra un loader durante l'operazione.
 *
 */
export default async function call(url, method, payload) {
    if ((method !== 'POST' && method !== 'PUT') && payload) {
        throw new Error('Non puoi inserire un payload per chiamate diverse da POST e PUT');
    }
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (payload) {
        options.body = JSON.stringify(payload);
    }
    // Loader.showLoader();
    const response = await fetch(url, options);
    if (!response.ok)
        throw new Error(response.statusText);
    const data = await response.json();
    // Loader.hideLoader();
    return data;
}
//# sourceMappingURL=call.js.map