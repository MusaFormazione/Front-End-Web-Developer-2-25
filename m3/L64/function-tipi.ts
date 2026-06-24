
function somma(a:number,b:number):number{
    return a + b
}


const res = somma(2,2);


type pizza = {gusto:string,prezzo:number, disponibile:boolean} //custom type

async function getPizzas(url:string):Promise<pizza[]>{
    const res = await fetch(url);

    const data = <pizza[]> await res.json();

    return data;
} 


const pizze = getPizzas('');