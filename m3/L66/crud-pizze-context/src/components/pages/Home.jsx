import React from 'react'
import TabellaPizze from '../TabellaPizze'
import { useContext } from 'react';
import { PizzaContext } from '../../contexts/PizzaContext';

const Home = () => {
      const {
        isError,
        isLoading
      } = useContext(PizzaContext);
  return (
    <div>
        <h1>Gestione pizze</h1>

        {(!isLoading && !isError) &&
          <TabellaPizze />
        }

    </div>
  )
}

export default Home