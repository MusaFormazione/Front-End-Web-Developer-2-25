
function somma(a:number,b:number):number{
    return a + b
}


const res = somma(2,2);


//tipi di dato "particolare che potresti restituire"
function saluta():void{ //Comunica che la funzione non restituisce niente non è fatta per restituire 
    alert('ciao!')
}

//Questa funzione in caso di chiamata avvenuta con successo, restituisce un array di stringhe oppure un dato di tipo never se l'errore della riga 20 viene scatenato. 
async function call():Promise<string[]|never>{

    const response:Response = await fetch('');
        
    if(!response.ok) throw new Error('Errore nella richiesta')
    //In caso di errore, il codice successivo non viene eseguito poichè lanciamo l'eccezione
        
    const data = <string[]> await response.json();
        
    return data;

}

//Questa funzione lancia un'eccezione che però non è gestita, quindi dovrai usare un trick ed ogni volta che la chiami. 
//Non è da considerarsi un problema, purché tu gestisca sempre l'errore con un blocco tra i catch 
//È utile quando vuoi lanciare la funzione più volte e ogni volta fare una gestione errori diversa. 
try{
    call();
}catch(err){
    console.error(err)
}

//Questa funzione, invece, ha il suo blocco tra i catch per gestire l'eccezione. 
//Di fatto il blocco try...catch è gestito per definire che, qualora la chiamata non andasse a buon fine Verrà restituito un dato di tipo null
async function call2():Promise<string[]|null>{

    try{

        const response:Response = await fetch('');
        
        if(!response.ok) throw new Error('Errore nella richiesta')
            //In caso di errore, il codice successivo non viene eseguito poichè lanciamo l'eccezione
        
        const data = <string[]> await response.json();
        
        return data;
    }catch(err){
        console.error(err)
        return null
    }
}

//Dato che il blocco tra i catch è interno alla funzione potrai invocare call2 senza problemi e senza dover creare ulteriori blocchi try...catch, ma dovrai anche accettare quella che è la gestione errori già definita
call2()


function parametriFacoltativi(obbligatorio:string, valorePredefinito:string="#", valoreFacoltativo?:string){
    //valorePredefinito:string="#" significa: Chi usa questa funzione potrebbe non fornire questo valore. In quel caso utilizzerò il cancelletto (O qualunque valore tu abbia messo tra le virgolette)
    //valoreFacoltativo?:string Significa: Chiusa questa funzione, potrebbe non fornire questo valore, In quel caso non succede niente. Prima di utilizzarlo sarà necessario verificare la sua esistenza con un IF. 
}
