import {useState, useEffect} from 'react'
import ActionButton from './ActionButton'

const FormCreazioneModifica = ({onAdd, onUpdate, selectedPizza, setSelectedPizza}) => {


  useEffect(function(){
    if(selectedPizza)  setPizza(selectedPizza)
  },[selectedPizza])

  const pizzaDefault = {
    id:"",
    gusto:"",
    prezzo:0,
    disponibile:1
  }

  const [pizza, setPizza] = useState(pizzaDefault);

  function onAddHandler(e){
      let {name, value} = e.target;

      //siccome value ottenuto da elemento dom (soggetto dell'evento) è stringa
      //se la stringa contiene solo numeri converti in number
      if(!isNaN(value)) value = Number(value);

      setPizza({
        ...pizza,//preservando tutte le proprietà e valori dell'oggetto pizza
        [name]:value
      })
  }  

  function submitHandler(e){
    e.preventDefault()
    if(selectedPizza){
      onUpdate(pizza)
    }else{
      onAdd(pizza);
    }
    setPizza(pizzaDefault)//reset dello stato, e quindi del form
  }
  
  function removePizza(){
    setSelectedPizza(null)
    setPizza(pizzaDefault)
  }

  return (
    <>
    <h3>{!selectedPizza ? 'Aggiungi' : 'Modifica'} pizza</h3>
    <form>

      <div>
        <input 
        name="gusto" 
        onChange={onAddHandler} 
        value={pizza.gusto} 
        type="text" 
        placeholder="Gusto" />

      </div>
      <div>
        <input name="prezzo" 
        onChange={onAddHandler} 
        value={pizza.prezzo} 
        type="number" 
        placeholder="prezzo" />
      </div>

      <label>
        Disponibile?
        <select defaultValue={pizza.disponibile} name="disponibile" onChange={onAddHandler}>
          <option value={1}>Si</option>
          <option value={0}>no</option>
        </select>
      </label>
    
    <div>
      <ActionButton 
        fn={submitHandler}>

        {!selectedPizza ? 'Aggiungi' : 'Aggiorna'}

        </ActionButton>

      {selectedPizza && 
      <ActionButton 
        type="button" 
        fn={removePizza}>
        
        Rimuovi selezione
      
      </ActionButton>}
    </div>

    </form>
    </>
  )
}

export default FormCreazioneModifica