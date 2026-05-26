
const Contatore = ({count, fnInc, fnDec}) => {

  return (
    <>
      <div>{count}</div>
      <button onClick={fnInc}>+</button>
      <button onClick={fnDec}>-</button>
    </>
  )
}

export default Contatore