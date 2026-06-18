import { useContext, useEffect } from 'react'
import FormCreazioneModifica from './components/FormCreazioneModifica';
import TabellaPizze from './components/TabellaPizze';
import './App.css'
import { PizzaContext } from './contexts/PizzaContext';

function App() {

  const {
    selectedPizza, 
    setSelectedPizza,
    addPizza,
    updatePizza,
    isError,
    isLoading,
    getAllPizzas
  } = useContext(PizzaContext);
  
  
  useEffect(()=>{
    getAllPizzas()
  },[])

  

  return (
    <>

        <FormCreazioneModifica />

        <hr />
        <hr />
        <hr />

        {isError && !isLoading && <div className='errorMessage'>C'è stato un errore nella richiesta</div>}

        {isLoading && <div className='loader'>Caricamento...</div>}

        {(!isLoading && !isError) &&
          <TabellaPizze />
        }

    </>
  )
}

export default App