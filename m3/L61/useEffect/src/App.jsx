import { useState, useEffect } from 'react'
import './App.css'
import Effetto from './assets/components/effetto'

function App() {

  const [isVisible, setIsVisible] = useState(true)

  useEffect(()=> {
    
    console.log('stato aggiornato');   
    
  }, [])

  return (
    <>
      {isVisible && <Effetto/>}  

      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Nascondi' : 'Mostra'}</button>
    </>
  )
}

export default App
