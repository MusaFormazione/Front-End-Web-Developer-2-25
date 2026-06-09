import React from 'react'

const ActionButton = ({action, fn, children}) => {

  function getClassName(){
      switch(action){
        case 'delete':
          return 'danger';
        case 'edit':
          return 'warning';
        default:
          return 'primary'
      }
  }

  return (
    <button className={getClassName()} onClick={fn}>{children}</button>
  )
}

export default ActionButton