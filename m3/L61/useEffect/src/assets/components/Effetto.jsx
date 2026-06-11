import { useEffect } from 'react'

const Effetto = () => {

    useEffect(function(){
    
        const timer = setInterval(()=>{
            console.log('Eseguito');            
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    },[])

  return (
    <div>effetto</div>
  )
}

export default Effetto