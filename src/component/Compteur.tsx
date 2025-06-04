import { useState, useCallback } from 'react';
import '../App.css'

interface compteurProps{
    Compteur?:number
    onClick?: (newValue:number)=> void
}

function Compteur(props: compteurProps) {
  const [count, setCount] = useState(0)
const handleClickMore = useCallback(
        () => setCount(count + 1)
        , [count, props]
    );
  return (
    <>
        <p>{count}</p>
      <button onClick={handleClickMore}>
        add 
      </button>
    </>
  )
}

export default Compteur;
