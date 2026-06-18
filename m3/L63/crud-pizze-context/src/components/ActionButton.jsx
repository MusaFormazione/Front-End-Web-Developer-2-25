import React from 'react'

const ActionButton = ({action, fn, children}) => {

  function getClassName(){
    let className = "btn btn-";

      switch(action){
        case 'delete':
          className += 'danger';
          break;
        case 'edit':
          className +=  'warning';
          break;
        default:
          className +=  'primary'
      }

      return className;
  }

  return (
    <button className={getClassName()} onClick={fn}>{children}</button>
  )
}

export default ActionButton