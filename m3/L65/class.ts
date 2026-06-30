class Pizza{

    constructor(public gusto:string, public prezzo:number, public disponibile:boolean){}

}


const diavola:Pizza = {
    gusto: "",
    prezzo: 0,
    disponibile: false
}



// 
// versione estesa
// class Pizza{
//     public gusto:string;
//     public prezzo:number;
//     public disponibile:boolean;

//     constructor(gusto:string, prezzo:number, disponibile:boolean){
//         this.gusto = gusto;
//         this.prezzo = prezzo;
//         this.disponibile = disponibile;
//     }

// }