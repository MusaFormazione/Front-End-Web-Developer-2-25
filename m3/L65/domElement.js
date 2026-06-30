var elemento = document.querySelector('#test');
if (elemento) //se esiste elemento
    elemento.innerHTML = 'Ciao Mondo'; //allora scrivici dentro
//Siccome è elemento è potenzialmente nullo, tipe script ci richiede di verificare la sua esistenza prima di poterlo manipolare. 
var elementoInput = document.querySelector('input#elemento-input');
if (elementoInput)
    elementoInput.value = 'Ciao';
