import { useContext, useEffect } from 'react'
import FormCreazioneModifica from './components/FormCreazioneModifica';
import TabellaPizze from './components/TabellaPizze';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PizzaContext } from './contexts/PizzaContext';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/pages/Home';
import CreaPizza from './components/pages/CreaPizza';
import ModificaPizza from './components/pages/ModificaPizza';
import NotFound from './components/pages/NotFound';

function App() {

  const {
    getAllPizzas
  } = useContext(PizzaContext);


  useEffect(() => {
    getAllPizzas()
  }, [])



  return (
    <>


      <BrowserRouter>
        <Header />
        <main className="container">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/crea-pizza' element={<CreaPizza/>}></Route>
            <Route path='/modifica-pizza/:id' element={<ModificaPizza/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>


      {/* {isError && !isLoading && <div className='errorMessage alert alert-danger'>C'è stato un errore nella richiesta</div>}

        {isLoading && <div className='loader alert alert-info'>Caricamento...</div>} */}
    </>
  )
}

export default App