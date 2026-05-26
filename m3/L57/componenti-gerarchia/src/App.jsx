import { useState } from 'react'
import Titolo from './components/Titolo';
import Contatore from './components/Contatore';
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function incrementa() {
    setCount(count + 1);
  }

  function decrementa() {
    if ((count - 1) < 0) return;

    setCount(count - 1);
  }

  return (
    <>
      <Titolo testo="Ciao Mondo" classe="h1" />
      {/* contatore in app  */}
      <div>{count}</div>
      <button onClick={incrementa}>+</button>
      <button onClick={decrementa}>-</button>
      {/* contatore in componente dumb  */}
      <Contatore count={count} fnInc={incrementa} fnDec={decrementa}/>
    </>
  )
}

export default App
