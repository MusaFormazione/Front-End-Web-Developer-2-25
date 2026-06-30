import React from 'react'
import ActionButton from './ActionButton';
import { Link } from 'react-router';

const TrItem = ({pizza, onDelete}) => {

  const {id, gusto, prezzo, disponibile} = pizza;

  return (
    <tr>
          <td>{id + 1}</td>
          <td>{gusto}</td>
          <td>{prezzo}</td>
          <td>{disponibile ? 'Si': 'No'}</td>
          <td>
            <ActionButton action="delete" fn={() => onDelete(id)}>Elimina</ActionButton>
            <Link className='btn btn-warning' to={`/modifica-pizza/${id}`}>Modifica</Link>
          </td>
      </tr>
  )
}

export default TrItem