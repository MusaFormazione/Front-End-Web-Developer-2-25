import React from 'react'
import ActionButton from './ActionButton';

const TrItem = ({pizza, onDelete, onSelect}) => {

  const {id, gusto, prezzo, disponibile} = pizza;

  return (
    <tr>
          <td>{id + 1}</td>
          <td>{gusto}</td>
          <td>{prezzo}</td>
          <td>{disponibile ? 'Si': 'No'}</td>
          <td>
            <ActionButton action="delete" fn={() => onDelete(id)}>Elimina</ActionButton>
            <ActionButton action="edit" fn={() => onSelect(pizza)}>Modifica</ActionButton>
          </td>
      </tr>
  )
}

export default TrItem