import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { PizzaContext } from '../../contexts/PizzaContext';
import ActionButton from '../ActionButton';
import { useParams } from 'react-router';
import { Link } from 'react-router';


const ModificaPizza = () => {


  const pizzaDefault = {
    id: "",
    gusto: "",
    prezzo: 0,
    disponibile: 1
  }
  const [pizza, setPizza] = useState(pizzaDefault);

  const {
    updatePizza,
    getPizzaByID
  } = useContext(PizzaContext);

  const { id } = useParams();


  useEffect(function () {
    getPizzaByID(id)
      .then(res => setPizza(res))
  }, [id])


  function changeHandler(e) {
    let { name, value } = e.target;

    if (!isNaN(value)) value = Number(value);

    setPizza({
      ...pizza,
      [name]: value
    })
  }

  function submitHandler(e) {
    e.preventDefault()

    updatePizza(pizza)
  }


  return (
    <div>
      <h1>Modifica la pizza [nomepizza]</h1>
      <form>

        <div>
          <input
            name="gusto"
            onChange={changeHandler}
            value={pizza.gusto}
            type="text"
            placeholder="Gusto"
            className='form-control'
          />

        </div>
        <div>
          <input name="prezzo"
            onChange={changeHandler}
            value={pizza.prezzo}
            type="number"
            placeholder="prezzo"
            className='form-control'
          />
        </div>

        <label>
          Disponibile?
          <select className='form-control' defaultValue={pizza.disponibile} name="disponibile" onChange={changeHandler}>
            <option value={1}>Si</option>
            <option value={0}>no</option>
          </select>
        </label>

        <div>
          <ActionButton
            fn={submitHandler}>
            Aggiorna
          </ActionButton>
        </div>

        <Link to="/modifica-pizza/1">Pizza Precedente</Link>

      </form>
    </div>
  )
}

export default ModificaPizza