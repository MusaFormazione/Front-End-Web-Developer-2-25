function sommaConcatena<T>(a:T,b:T):T{
    return (a as any) + b
}

sommaConcatena<string>('ciao','mondo')//concatenamento ciao + mondo = ciaomondo
sommaConcatena<number>(2,2)//somma 2 + 2


//Puoi usare anche più di un generic separandoli con una virgola. 
class Test<T,U>{
    //In questo caso lei, proprietà Sono già definite, ma non il loro tipo di dato. 
    constructor(public prop:T, public prop2:U){}
}

//Per generare questo oggetto, quindi, dovrai definire quali tipi di dato sono assegnati alle proprietà. 
//In questo caso abbiamo detto che prop è stringa è prop2 è number
new Test<string, number>('',0)