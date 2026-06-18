import React, { useContext } from 'react'
import TrItem from './TrItem';
import { PizzaContext } from '../contexts/PizzaContext';

const TabellaPizze = () => {

  const {
      pizze, 
      setSelectedPizza,
      removePizza
    } = useContext(PizzaContext);

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Gusto</th>
          <th>Prezzo</th>
          <th>Disponibile</th>
          <th>Azioni</th>
        </tr>
      </thead>
      <tbody>
        {
          // listaPizze.map(p => <TrItem pizza={p}/>)
          // key={p.id + "-tr"} 
          // Quando cicli un array per generare elementi JSX react ti richiede l'utilizzo dell'attributo key
          // Se non lo metti, vedrai un errore nel terminale del browser che ti avviserà e ti ricorderà di metterlo. 
          // Chi deve contenere un valore univoco che possa aiutare react ad identificare l'elemento 
          pizze.map(p => <TrItem key={p.id + "-tr"} 
            pizza={p}
            onDelete={removePizza} 
            onSelect={setSelectedPizza}/>)
        }
      </tbody>
    </table>
    </>
  )
}

export default TabellaPizze