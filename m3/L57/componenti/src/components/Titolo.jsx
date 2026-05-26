
const Titolo = ({testo, classe}) => {
    
  return (
    <h1 className={classe ?? ''}>{testo}</h1>
  )
}

export default Titolo