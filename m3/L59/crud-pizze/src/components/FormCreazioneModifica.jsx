import {useState} from 'react'

const FormCreazioneModifica = ({onAdd, onUpdate}) => {

  const [pizza, setPizza] = useState({
    id:"",
    gusto:"",
    prezzo:0,
    disponibile:1
  });

  function onAddHandler(e){
      let {name, value} = e.target;

      //siccome value ottenuto da elemento dom (soggetto dell'evento) è stringa
      //se la stringa contiene solo numeri converti in number
      if(!isNaN(value)) value = Number(value);

      setPizza({
        ...pizza,
        [name]:value
      })

      console.log(pizza);
      

  }  
  
  return (
    <>
    <h3>Aggiungi/modifica pizza</h3>
    <form>

      <div>
        <input name="gusto" onChange={onAddHandler} value={pizza.gusto} type="text" placeholder="Gusto" />
      </div>
      <div>
        <input name="prezzo" onChange={onAddHandler} value={pizza.prezzo} type="number" placeholder="prezzo" />
      </div>

      <label>
        Disponibile?
        <select defaultValue={pizza.disponibile} name="disponibile" onChange={onAddHandler}>
          <option value={1}>Si</option>
          <option value={0}>no</option>
        </select>
      </label>
    
    <div>
      <button>Aggiungi/Salva</button>
    </div>

    </form>
    </>
  )
}

export default FormCreazioneModifica