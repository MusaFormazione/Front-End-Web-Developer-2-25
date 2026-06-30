class Pizza{
    constructor(
        public gusto:string, 
        public prezzo:number,
        public disponibile:boolean, 
        public id?:number
    ){}

    toString():string{
        return JSON.stringify(this);
    }
}

export default Pizza;