import {useState} from 'react'

const Contatore = () => {

    const [count, setCount] = useState(0);

  function incrementa(e){
    setCount(count + 1);
  }

  function decrementa(){
    if((count - 1) < 0) return;

    setCount(count - 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={incrementa}>+</button>
      <button onClick={decrementa}>-</button>
    </>
  )
}

export default Contatore