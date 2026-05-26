import Titolo from './components/Titolo';
import Contatore from './components/Contatore';
import './App.css'

function App() {

  return (
    <>
      <Titolo testo="Ciao Mondo" classe="h1"/>
      <Contatore/>
      <Contatore/>
    </>
  )
}

export default App
