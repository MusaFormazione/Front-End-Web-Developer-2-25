import React from 'react'

const Alert = ({testo, funzione}) => {

    
  return (
    <button onClick={funzione}>{testo}</button>
  )
}

export default Alert