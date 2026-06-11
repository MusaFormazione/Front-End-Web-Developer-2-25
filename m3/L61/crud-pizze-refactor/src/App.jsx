import { useState, useEffect } from 'react'
import FormCreazioneModifica from './components/FormCreazioneModifica';
import TabellaPizze from './components/TabellaPizze';
import PizzeCrudApi from './utils/PizzeCrudApi';
import './App.css'

function App() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [pizze, setPizze] = useState([]);
  
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  async function caricaPizze(){
    setIsLoading(true)
    const risposta = await PizzeCrudApi.getAll()//risposta è null se c'è stato errore
    setIsLoading(false);

    if(risposta != null){//se la risposta  non è null
      setPizze(risposta)//significa che abbiamo i dati, quindi aggiorniamo lo stato
      return;//e fermiamo la funzione
    }
    
    setIsError(true)//se siamo arrivati qui c'è errore
  }

  useEffect(()=>{

    setIsLoading(true)

    caricaPizze();

  },[])

  function addPizza(newPizza){
    setIsLoading(true)
    PizzeCrudApi.create(newPizza)
    .then(data => {
      setPizze([...pizze, data])
    })
    .catch(() => setIsError(true))
    .finally(() => {
      setIsLoading(false)
    })
  }

  function removePizza(id){

    setIsLoading(true)
    
    PizzeCrudApi.delete(id)
    .then(() => {
      const updated = pizze.filter(p => p.id !== id);
      setPizze(updated);
    })
    .catch(() => setIsError(true))
    .finally(() => {
      setIsLoading(false)
    })
    
  }

  function updatePizza(updatedPizza){

    setIsLoading(true)
    
    PizzeCrudApi.update(updatePizza)
    .then(() => {
      const updated = pizze.map(p => {
        if(p.id === updatedPizza.id){
          return updatedPizza;
        } 
        return p;
      })
  
      setPizze(updated);
      setSelectedPizza(null)
    })
    .catch(() => setIsError(true))
    .finally(() => {
      setIsLoading(false)
    })

  }

  return (
    <>

        <FormCreazioneModifica 
        selectedPizza={selectedPizza} 
        setSelectedPizza={setSelectedPizza}
        onAdd={addPizza} 
        onUpdate={updatePizza}/>

        <hr />
        <hr />
        <hr />

        {isError && !isLoading && <div className='errorMessage'>C'è stato un errore nella richiesta</div>}

        {isLoading && <div className='loader'>Caricamento...</div>}

        {(!isLoading && !isError) &&
          <TabellaPizze 
          listaPizze={pizze} 
          onDelete={removePizza}
          onSelect={setSelectedPizza} />
        }

    </>
  )
}

export default App