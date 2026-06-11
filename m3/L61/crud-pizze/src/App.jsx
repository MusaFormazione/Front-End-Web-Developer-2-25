import { useState, useEffect } from 'react'
import FormCreazioneModifica from './components/FormCreazioneModifica';
import TabellaPizze from './components/TabellaPizze';
import './App.css'

function App() {
  const apiUrl = 'http://localhost:3000/pizze';
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [pizze, setPizze] = useState([]);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(()=>{

    setIsLoading(true)
    fetch(apiUrl)
    .then(res => {
      if(!res.ok) throw new Error('Errore nella chiamata');

      return res.json();
    })
    .then(data => setPizze(data))
    .catch(() => setIsError(true))
    .finally(() => {
      setIsLoading(false)
    })

  },[])

  function addPizza(newPizza){
    setIsLoading(true)
    fetch(apiUrl, {
      method:'POST',
      headers: {"Content-Type":"Application/json"},
      body: JSON.stringify(newPizza)
    })
    .then(res => {
      if(!res.ok) throw new Error('Errore nella chiamata');

      return res.json();
    })
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
    fetch(`${apiUrl}/${id}`, {
      method:'DELETE',
      headers: {"Content-Type":"Application/json"},
    })
    .then(res => {
      if(!res.ok) throw new Error('Errore nella chiamata');

      return res.json();
    }).then(() => {
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
    fetch(`${apiUrl}/${updatedPizza.id}`, {
      method:'PUT',
      headers: {"Content-Type":"Application/json"},
      body: JSON.stringify(updatedPizza)
    })
    .then(res => {
      if(!res.ok) throw new Error('Errore nella chiamata');

      return res.json();
    }).then(() => {
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