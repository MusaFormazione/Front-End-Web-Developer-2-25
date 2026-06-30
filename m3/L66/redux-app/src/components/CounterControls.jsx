import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, reset, addAmount } from '../store/counterSlice';

const CounterControls = () => {
    // useDispatch restituisce la funzione dispatch dello store.
    // Chiamare dispatch(action) è l'unico modo per modificare lo stato Redux.
    const dispatch = useDispatch();
    
      // amount è stato locale del componente (non ha bisogno di stare in Redux
  // perché nessun altro componente deve leggerlo) e serve solo per creare l'input controllato
    const [amount, setAmount] = useState(5);


  return (
    <>


        <div className='card'>
            <h2>Controlli</h2>
            <div className="bottoni">
                {/* dispatch(decrement()) invia l'action { type: 'counter/decrement' } allo store */}
                <button onClick={() => dispatch(decrement())}>-1</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(increment())}>+1</button>
            </div>
        </div>
        <div className="custom">
            <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))} 
            />
            {/* addAmount(amount) crea { type: 'counter/addAmount', payload: amount }
            il valore di amount diventa action.payload nel reducer */}
            <button onClick={()=> dispatch(addAmount(amount))}>Aggiungi {amount}</button>
        </div>
    </>
  )
}

export default CounterControls