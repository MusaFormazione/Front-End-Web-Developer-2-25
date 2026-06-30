import React from 'react'
import { useSelector } from 'react-redux'

const CounterDisplay = () => {

  // useSelector legge un valore dallo store.
  // Riceve una funzione selettore: (state) => il valore che ci serve.
  // state.counter corrisponde alla chiave "counter" in configureStore.
  // Ogni volta che state.counter.value cambia, il componente si ri-renderizza.
  const count = useSelector((state) => state.counter.value)

  // Nota: questo componente non sa nulla di CounterControls.
  // Riceve gli aggiornamenti dallo store, non tramite props.
  return (
    <div className='card'>Valore attuale: {count}</div>
  )
}

export default CounterDisplay