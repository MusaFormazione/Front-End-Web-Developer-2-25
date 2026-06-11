export default class PizzeCrudApi{

    static url = 'http://localhost:3000/pizze';

    static async call(url, method, body = null){

        let options = {
            method,
            headers:{"Content-Type": "Application/json"}
        }

        if(body) options.body = JSON.stringify(body)

        const response = await fetch(url, options)

        if(!response.ok) throw new Error()

        return await response.json()
    }

    static async getAll(){
        let data = null;//rimane null se c'è errore

        try{
            data = await this.call(this.url, 'GET')//in caso di successo riceviamo i dato e li mettiamo nella variabile data
        }catch(err){
            console.error(err);
        }

        //restituiamo un oggetto
        return data;
    }

    static async getById(id){
        return await this.call(`${this.url}/${id}`,'GET')
    }

    static async create(newPizza){
        return await this.call(`${this.url}`,'POST',newPizza)
    }

    static async update(updatedPizza){
        return await this.call(`${this.url}/${updatedPizza.id}`,'PUT', updatedPizza)
    }

    static async delete(id){
        return await this.call(`${this.url}/${id}`,'DELETE')
    }

}