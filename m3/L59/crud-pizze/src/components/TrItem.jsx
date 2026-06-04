import React from 'react'
import ActionButton from './ActionButton';

const TrItem = ({id, gusto, prezzo, disponibile, onDelete}) => {
  return (
    <tr>
          <td>{id + 1}</td>
          <td>{gusto}</td>
          <td>{prezzo}</td>
          <td>{disponibile ? 'Si': 'No'}</td>
          <td>
            <button onClick={() => onDelete(id)}>Elimina</button>
            <button>Modifica</button>
          </td>
      </tr>
  )
}

export default TrItem