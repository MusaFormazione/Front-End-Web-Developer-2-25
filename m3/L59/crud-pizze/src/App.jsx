import { useState } from 'react'
import FormCreazioneModifica from './components/FormCreazioneModifica';
import TabellaPizze from './components/TabellaPizze';
import { pizzeArray } from './data/pizze.js';
import './App.css'

function App() {

  const [pizze, setPizze] = useState(pizzeArray);

  function addPizza(newPizza){
    setPizze([...pizze, newPizza])
  }

  function removePizza(id){
    const updated = pizze.filter(p => p.id !== id);
    setPizze(updated);
  }

  function updatePizza(updatedPizza){

    const updated = pizze.map(p => {
      if(p.id === updatedPizza.id){
        return updatedPizza;
      } 
      return p;
    })

    setPizze(updated);
  }

  return (
    <>

        <FormCreazioneModifica onAdd={addPizza} onUpdate={updatePizza}/>

        <hr />
        <hr />
        <hr />

        <TabellaPizze listaPizze={pizze} onDelete={removePizza}/>

    </>
  )
}

export default App