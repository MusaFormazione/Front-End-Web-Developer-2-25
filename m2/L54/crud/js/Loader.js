/**
 * Una classe di utilità per visualizzare e nascondere un indicatore di caricamento sulla pagina.
 */
export default class Loader{

    /** @type {string} L'ID utilizzato per l'elemento loader. */
    static id = 'loader';

    /**
     * Mostra l'indicatore di caricamento creando e aggiungendo un div al body.
     */
    static showLoader(){
        const div = document.createElement('div')
        div.id = this.id;
        div.innerText = 'Caricamento...';
        document.body.append(div);
    }

    /**
     * Nasconde l'indicatore di caricamento rimuovendo il div loader dal body.
     */
    static hideLoader(){
        const loaderDiv = document.querySelector('#'+this.id);
        loaderDiv.remove()
    }

}