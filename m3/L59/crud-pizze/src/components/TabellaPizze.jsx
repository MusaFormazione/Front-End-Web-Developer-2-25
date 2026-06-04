import React from 'react'
import TrItem from './TrItem';

const TabellaPizze = ({listaPizze, onDelete}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Gusto</th>
          <th>Prezzo</th>
          <th>Disponibile</th>
          <th>Azioni</th>
        </tr>
      </thead>
      <tbody>
        {
          // listaPizze.map(p => <TrItem pizza={p}/>)
          listaPizze.map(p => <TrItem key={p.id + "-tr"} {...p} onDelete={onDelete}/>)
        }
      </tbody>
    </table>
  )
}

export default TabellaPizze