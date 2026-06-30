let array:[] = [];//array vuoto, rimarrà sempre vuoto (verosimilmente hai sbagliato qualcosa)
let arrayS:string[] = ["a","b"];
let arrayDoppio:string[]|number[] = [];//array solo stringhe o solo numero
let arrayMisto:(string|number)[] = [0,"a"]; //array misto stringhe e numeri

//questa è una tupla
//Nell'esempio qui sotto sto dichiarando che nella variabile ci può essere un array con due valori in. Il in cui il primo deve essere una stringa, il secondo deve essere un numero. 
let tuple:[string, number] = ['a',0];
let [a,b] = tuple;//esempio destrutturazione tupla


//Sistema alternativo per dichiarare un array di numeri. 
//Questo sistema adopera un generic(Vedi file apposito per il Generic ). 
let arrayAlternativo:Array<number> =  [1,2,3,4,5,6,7,8,9];

