export default class Pizza{
    constructor(gusto, prezzo, disponibile, id = null){
        this.gusto = gusto,
        this.prezzo = Number(prezzo)
        this.disponibile = disponibile
        
        if(id) this.id = id;
    }
    toString(){
        return JSON.stringify(this);
    }
}