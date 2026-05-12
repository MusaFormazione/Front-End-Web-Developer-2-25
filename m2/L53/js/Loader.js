export default class Loader{

    static id = 'loader';

    static showLoader(){
        const div = document.createElement('div')
        div.id = this.id;
        div.innerText = 'Caricamento...';
        document.body.append(div);
    }

    static hideLoader(){
        const loaderDiv = document.querySelector('#'+this.id);
        loaderDiv.remove()
    }

}